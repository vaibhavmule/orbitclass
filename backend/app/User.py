"""User Model."""
import jwt
import pendulum

from orator.orm import has_many

from config.database import Model
from config.application import KEY


class User(Model):
    """User Model."""

    __fillable__ = ['email', 'password', 'bio', 'image', 'token']

    __auth__ = 'email'
    __guarded__ = ['id', 'password']

    def generate_token(self):
        payload = {
            'issued': str(pendulum.now()),
            'expires': str(pendulum.now().add(minutes=1)),
            'refresh': str(pendulum.now().add(days=1)),
            'scopes' : ''
        }
        self.token = bytes(jwt.encode(payload, KEY, algorithm='HS256')).decode('utf-8')
        self.save()
        return self

    def payload(self):
        return {
            'email': self.email,
            'image': self.image,
            'bio': self.bio,
        }
