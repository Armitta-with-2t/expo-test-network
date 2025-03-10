# deck.py
import random

class Deck:
    def __init__(self):
        self.suits = ['hearts', 'diamonds', 'clubs', 'spades']
        self.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
        self.cards = [{'rank': rank, 'suit': suit} for suit in self.suits for rank in self.ranks]

    def get_random_card(self):
        return random.choice(self.cards)