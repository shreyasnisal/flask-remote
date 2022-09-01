from flask import Flask, jsonify
from pynput.keyboard import Key, Controller
import time

app = Flask(__name__)
keyboard = Controller()

@app.route("/ready")
def ready():
	return jsonify(message = "ready")

@app.route("/space")
def space():
	keyboard.press(Key.space)
	keyboard.release(Key.space)
	return jsonify(message = "success")

@app.route("/left")
def left():
	keyboard.press(Key.left)
	keyboard.release(Key.right)
	return jsonify(message = "success")

@app.route("/right")
def right():
	keyboard.press(Key.right)
	keyboard.release(Key.right)
	return jsonify(message = "success")

@app.route("/close")
def close():
	keyboard.press(Key.alt)
	keyboard.press(Key.f4)
	keyboard.release(Key.f4)
	keyboard.release(Key.alt)
	return jsonify(message = "success")

@app.route("/sleep")
def sleep():
	# Minimize all windows
	keyboard.press(Key.cmd)
	keyboard.press("d")
	keyboard.release("d")
	keyboard.release(Key.cmd)

	time.sleep(1)

	# alt + f4
	keyboard.press(Key.alt)
	keyboard.press(Key.f4)
	keyboard.release(Key.f4)
	keyboard.release(Key.alt)

	time.sleep(1)

	# go to sleep option and select
	keyboard.press(Key.up)
	keyboard.release(Key.up)
	keyboard.press(Key.enter)
	keyboard.release(Key.enter)

	return jsonify(message = "success")

app.run("0.0.0.0")