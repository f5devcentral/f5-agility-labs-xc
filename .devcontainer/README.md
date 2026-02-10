Prerequisites:
- Docker or Rancher configured in Docker(mobyd) mode.
- VSCode

Once you re-open in a DevContainer for the first time, we need to create a Python virtual environment to store our Python modules.

Let’s create a virtual environment containing the required dependencies.

Open the Terminal (Ctrl+`) and create a new virtual environment:

```bash
python -m venv .virtualenv
```
Activate the environment and install the demo project’s dependencies:

```bash
source .virtualenv/bin/activate
# Note, the prompt should now look like: (env) $
# Now run:
python -m pip install -r requirements.txt
```
With the environment created, we now need to tell Esbonio to use it

This has been completed already in this project:

Open the project’s pyproject.toml file and add the following pythonCommand to the configuration

```yaml
[tool.esbonio.sphinx]
buildCommand = ["sphinx-build", "-M", "dirhtml", "docs", "docs/_build"]
pythonCommand = ["${venv:.virtualenv}"]
```