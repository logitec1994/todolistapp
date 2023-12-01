from flask import Blueprint, render_template, request, redirect, jsonify
import requests

tasks_bp = Blueprint("tasks", __name__)

# This variable gets from database
data = []


@tasks_bp.route("/", methods=["GET"])
def get_tasks_list():
    return render_template('tasks.html', title="Adding form", tasks=enumerate(data))


@tasks_bp.route("/", methods=["POST"])
def add_task():
    update_data = request.form['title']
    data.append(update_data)
    return redirect("/")


@tasks_bp.route("/", methods=["DELETE"])
def remove_task():
    print("We were here")
    update_data = request.get_json()
    print(update_data)
    data_to_delete = update_data.get("task")
    if data_to_delete in data:
        data.remove(data_to_delete)
        return jsonify({"message": "Task deleted"})
    return jsonify({"message": "Task not found"})
