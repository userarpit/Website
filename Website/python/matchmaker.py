import random
import time
from tkinter import Tk, DISABLED, Button
b = []
win = Tk()
win.title("Match Maker")
first = True
previousx = 0
previousy = 0
def show_symbol(x,y):
    global first
    global previousx
    global previousy

    buttons[x,y]['text'] = button_symbols[x,y]
    buttons[x,y].update_idletasks()

    if first:
        print("first")
        previousx = x
        previousy = y
        first=False
    elif previousx == x and previousy == y:
        pass
    else:    
        print("elif")
        if buttons[previousx,previousy]['text'] != buttons[x,y]['text']:
            print("if")
            time.sleep(0.5)
            buttons[previousx,previousy]['text'] = ' ' 
            buttons[x,y]['text'] = ' '
        else:
            print("else")
            buttons[previousx,previousy]['command'] = DISABLED
            buttons[x,y]['command'] = DISABLED
        first = True

win.resizable(width = False, height = False)

buttons = {}
button_symbols = {}
symbols = [u'\u2702',u'\u2705',u'\u2708',u'\u2709',u'\u270A',u'\u270B',
           u'\u270C',u'\u270F',u'\u2712',u'\u2714',u'\u2716',u'\u2728',
           u'\u2702',u'\u2705',u'\u2708',u'\u2709',u'\u270A',u'\u270B',
           u'\u270C',u'\u270F',u'\u2712',u'\u2714',u'\u2716',u'\u2728']
random.shuffle(symbols)

for i in range(6):
    for j in range(4):
        button = Button(win,width=10,height=3,command=lambda i=i,j=j:show_symbol(i,j))
        button.grid(row=i,column=j,padx=1,pady=1)
        buttons[i,j] = button
        button_symbols[i,j] = symbols.pop()       

win.mainloop()