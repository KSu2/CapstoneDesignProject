from flask import Flask
from flask_socketio import SocketIO, send, emit
from flask_cors import CORS
from threading import Thread
# from train_model import train
# from reed_switch import get_status

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")


@app.route('/')
def index():
    return 'Hello world'

# custom event for when users login


@socketio.on('login')
def handle_login(data):
    print('received message: ' + data)
    # train model based on username passed by login
    # train(data)
    # need to determine the difference between messages being sent

# custom event when requesting the status of the reed switch


@socketio.on('status')
def handle_open():
    # get current status of the door
    # data = get_status()
    data = False
    print("door is: ", data)
    emit('status', data)


def run():
    socketio.run(app)


def start():
    # ctrl + C doesn't work to close server whith thread
    # need to figure out how to gracefully close thread
    # server = Thread(target=run)
    # server.start()
    print("hello world")


if __name__ == '__main__':
    run()
