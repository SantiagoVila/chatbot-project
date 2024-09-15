from sqlalchemy import Column, Integer, String, create_engine, declarative_base

engine = create_engine('sqlite:///chatbot.db', echo=True)
Base = declarative_base()

class Interaction(Base):
    __tablename__ = 'interactions'

    id = Column(Integer, primary_key=True)
    message = Column(String)
    response = Column(String)

Base.metadata.create_all(engine)
