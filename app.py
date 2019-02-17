from flask import Flask, render_template

smartcar_app = Flask(__name__)

@app.route('/')
def index():
    return render_template('www/index.html')

if __name__ == '__main__':
    smartcar_app.run(debug=True, host='0.0.0.0')
