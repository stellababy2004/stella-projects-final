import gradio as gr
import requests
import os

API_URL = "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta"
HF_TOKEN = os.environ.get("HF_TOKEN")
headers = {"Authorization": f"Bearer {HF_TOKEN}"}

def chat_fn(message):
    payload = {"inputs": message}
    response = requests.post(API_URL, headers=headers, json=payload)
    result = response.json()
    if isinstance(result, list) and "generated_text" in result[0]:
        return result[0]["generated_text"]
    else:
        return str(result)

iface = gr.Interface(
    fn=chat_fn,
    inputs=gr.Textbox(label="Въпрос"),
    outputs=gr.Textbox(label="Отговор"),
    title="CyberSec AI Chatbot",
    description="Попитай за киберсигурност, заплахи и добри практики.",
    css="styles.css"
)

iface.launch()