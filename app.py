from flask import Flask
from routes.tasks import tasks_bp
from api_routes.tasks import api_tasks_bp


app = Flask(__name__)


# Register all bp's
app.register_blueprint(tasks_bp)
app.register_blueprint(api_tasks_bp, url_prefix="/api")

if __name__ == "__main__":
    app.run(debug=True)
