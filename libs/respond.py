from datetime import datetime

def generate_response():
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return f'Server: The current date and time is {current_time}'
