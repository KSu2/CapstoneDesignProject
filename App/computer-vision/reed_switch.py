import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(18, GPIO.IN, GPIO.PUD_UP)


def get_status():
    read = GPIO.input(18)
    return read
