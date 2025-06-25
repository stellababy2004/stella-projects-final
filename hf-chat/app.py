import gradio as gr
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

# 🧠 Моделът, който използваме
model_id = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"

# 📥 Зареждане на токенизатор и модел
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.float32
).to("cpu")

# 💬 Функция за чат
def chat(prompt):
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
    outputs = model.generate(**inputs, max_new_tokens=100, do_sample=True)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response

# 🚀 Стартирай Gradio чат
gr.Interface(fn=chat, inputs="text", outputs="text", title="Stella AI").launch()

