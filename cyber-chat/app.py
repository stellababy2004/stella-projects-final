import os
from huggingface_hub import InferenceClient
import gradio as gr
from langdetect import detect

client = InferenceClient(
    provider="featherless-ai",
    api_key=os.environ["HF_TOKEN"]
)

def chat_fn(message):
    try:
        lang = detect(message)
    except Exception:
        lang = "bg"
    if lang != "bg":
        user_content = "Translate to Bulgarian and answer like a cybersecurity assistant:\n" + message
    else:
        user_content = message

    completion = client.chat.completions.create(
        model="mistralai/Magistral-Small-2506",
        messages=[
            {"role": "system", "content": "You are a helpful cybersecurity assistant. Answer in Bulgarian if possible."},
            {"role": "user", "content": user_content}
        ],
        temperature=0.7,
        top_p=0.95,
        max_tokens=1024,
    )
    return completion.choices[0].message.content

iface = gr.Interface(
    fn=chat_fn,
    inputs=gr.Textbox(label="Въпрос"),
    outputs=gr.Textbox(label="Отговор"),
    title="CyberSec AI Chatbot",
    description="Попитай за киберсигурност, заплахи и добри практики.",
    css="styles.css"
)

iface.launch(share=True)