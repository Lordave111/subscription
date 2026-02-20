from flask import Flask, render_template

app = Flask(__name__)

# 1. The Home Page (Login)
@app.route('/')
def login():
    return render_template('login.html')

# 2. The Dashboard
@app.route('/dashboard')
def dashboard():
    return render_template('index.html')

# 3. The Add Subscription Page
@app.route('/add')
def add_subscription():
    return render_template('add.html')

if __name__ == '__main__':
    # Setting debug=True lets you see errors in your browser
    app.run(debug=True)
