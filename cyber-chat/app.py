import gradio as gr
import os
from huggingface_hub import InferenceClient

client = InferenceClient(
    provider="hf-inference",
    api_key=os.environ["HF_TOKEN"],
)

def chat_fn(message):
    completion = client.chat.completions.create(
        model="HuggingFaceH4/zephyr-7b-beta",
        messages=[
            {"role": "user", "content": message}
        ],
    )
    return completion.choices[0].message['content']

iface = gr.Interface(
    fn=chat_fn,
    inputs=gr.Textbox(label="Въпрос"),
    outputs=gr.Textbox(label="Отговор"),
    title="CyberSec AI Chatbot",
    description="Попитай за киберсигурност, заплахи и добри практики.",
    css="styles.css"
)

iface.launch()