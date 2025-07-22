import requests
import streamlit as st


# App UI
st.title("🚀 AI Startup Idea Generator")
user_input = st.text_input("💡 Describe your interest or domain (e.g. health, education, AI):")

if st.button("Generate Startup Idea"):
    with st.spinner("Thinking..."):
        try:
            # Prepare chat completion request
            url = "http://localhost:1234/v1/chat/completions"  # or your IP: http://192.168.x.x:1234
            headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer lm-studio"
            }
            data = {
                "model": "nous-hermes-2-mistral-7b-dpo",
                "messages": [
                    {"role": "system", "content": "You are a startup idea expert."},
                    {"role": "user", "content": f"Suggest a startup idea based on: {user_input}"}
                ],
                "temperature": 0.7
            }

            # Send request to LM Studio
            response = requests.post(url, headers=headers, json=data)
            result = response.json()
            idea = result['choices'][0]['message']['content']
            st.success("Here's your startup idea:")
            st.markdown(f"💡 {idea}")

        except Exception as e:
            st.error(f"Failed to get response: {e}")
