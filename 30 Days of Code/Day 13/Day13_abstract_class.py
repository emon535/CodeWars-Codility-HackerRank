from abc import ABCMeta, abstractmethod


class Book(object, metaclass=ABCMeta):
    def __init__(self, title, author):
        self.title = title
        self.author = author

    @abstractmethod
    def display(): pass

# Write MyBook class


class MyBook(Book):
    def __init__(self, title, author, price):
        self.price = price

    def display(self):
        print("Title:", title, "\nAuthor:",
              author, "\nPrice:", self.price, "\n")


title = input()
author = input()
price = int(input())
new_novel = MyBook(title, author, price)
new_novel.display()
