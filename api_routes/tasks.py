from flask import Blueprint

api_tasks_bp = Blueprint("api_tasks", __name__)


@api_tasks_bp.route("/hello")
def test_echo():
    return "Hello"
