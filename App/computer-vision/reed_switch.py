import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(18, GPIO.IN, GPIO.PUD_UP)

while(True):
    read = GPIO.input(18)
    if read == True:
        # this should send a message to the app 
        print('Door is open')
    else:
        print('Door is closed')