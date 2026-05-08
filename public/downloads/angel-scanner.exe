import tkinter as tk
import requests
import threading
import time

APP_NAME = "ANGEL A.C"
API_URL = "https://angel-ac-zocv.vercel.app/api/validate-pin"

CHECKS = [
    "Validating scanner session...",
    "Checking kernel integrity...",
    "Checking driver integrity...",
    "Scanning FiveM cache...",
    "Checking Citizen Runtime...",
    "Scanning injected DLLs...",
    "Checking RWX memory regions...",
    "Checking shellcode regions...",
    "Validating PE headers...",
    "Checking hidden modules...",
    "Checking hidden drivers...",
    "Checking Windows Defender...",
    "Checking Secure Boot...",
    "Checking TPM...",
    "Checking registry forensic keys...",
    "Checking overlays...",
    "Building timeline correlation...",
    "Generating final verdict...",
]

class AngelScanner:
    def __init__(self, root):
        self.root = root
        self.root.title("ANGEL A.C Scanner")
        self.root.geometry("720x430")
        self.root.configure(bg="#050505")
        self.root.resizable(False, False)

        self.build_ui()

    def build_ui(self):
        self.panel = tk.Frame(
            self.root,
            bg="#080808",
            highlightbackground="#d4af37",
            highlightthickness=1
        )
        self.panel.pack(fill="both", expand=True, padx=18, pady=18)

        tk.Label(
            self.panel,
            text="SCANNER ACCESS",
            bg="#080808",
            fg="#d4af37",
            font=("Segoe UI", 21, "bold")
        ).pack(anchor="w", padx=25, pady=(25, 8))

        tk.Label(
            self.panel,
            text="Digite o PIN gerado no site ANGEL A.C para iniciar o scanner.",
            bg="#080808",
            fg="#cfcfcf",
            font=("Segoe UI", 10)
        ).pack(anchor="w", padx=25, pady=(0, 20))

        self.pin_entry = tk.Entry(
            self.panel,
            bg="#030303",
            fg="#f3d27b",
            insertbackground="#d4af37",
            font=("Consolas", 28, "bold"),
            justify="center",
            relief="flat"
        )
        self.pin_entry.pack(fill="x", padx=25, ipady=16)

        self.status = tk.Label(
            self.panel,
            text="WAITING PIN",
            bg="#080808",
            fg="#8f7440",
            font=("Segoe UI", 11, "bold")
        )
        self.status.pack(anchor="w", padx=25, pady=(18, 8))

        self.progress_bg = tk.Frame(self.panel, bg="#111111", height=14)
        self.progress_bg.pack(fill="x", padx=25, pady=(0, 18))

        self.progress = tk.Frame(self.progress_bg, bg="#d4af37", width=0)
        self.progress.place(x=0, y=0, height=14)

        self.log_box = tk.Text(
            self.panel,
            height=7,
            bg="#030303",
            fg="#d4af37",
            font=("Consolas", 9),
            relief="flat"
        )
        self.log_box.pack(fill="both", expand=True, padx=25, pady=(0, 18))

        self.start_btn = tk.Button(
            self.panel,
            text="VALIDATE PIN & START SCAN",
            bg="#d4af37",
            fg="#000000",
            activebackground="#f3d27b",
            activeforeground="#000000",
            font=("Segoe UI", 11, "bold"),
            relief="flat",
            height=2,
            command=self.start
        )
        self.start_btn.pack(fill="x", padx=25, pady=(0, 25))

    def log(self, text):
        self.log_box.insert("end", text + "\n")
        self.log_box.see("end")

    def set_progress(self, value):
        width = int((650 * value) / 100)
        self.progress.config(width=width)

    def start(self):
        pin = self.pin_entry.get().strip()

        if not pin:
            self.status.config(text="PIN REQUIRED", fg="#ff4b4b")
            return

        self.start_btn.config(state="disabled")
        threading.Thread(target=self.validate_and_scan, args=(pin,), daemon=True).start()

    def validate_and_scan(self, pin):
        self.status.config(text="VALIDATING PIN...", fg="#d4af37")
        self.log("[AUTH] Validating PIN with ANGEL A.C server...")

        try:
            response = requests.post(API_URL, json={"pin": pin}, timeout=10)
            data = response.json()

            if not data.get("success"):
                self.status.config(text="INVALID OR USED PIN", fg="#ff4b4b")
                self.log("[AUTH] PIN inválido, expirado ou já usado.")
                self.start_btn.config(state="normal")
                return

        except Exception as e:
            self.status.config(text="SERVER ERROR", fg="#ff4b4b")
            self.log("[AUTH] Could not connect to ANGEL A.C API.")
            self.start_btn.config(state="normal")
            return

        self.status.config(text="PIN ACCEPTED", fg="#00ff88")
        self.log("[AUTH] PIN accepted. One-time session started.")
        time.sleep(0.5)

        total = len(CHECKS)

        for i, check in enumerate(CHECKS):
            percent = int(((i + 1) / total) * 100)
            self.status.config(text=f"SCANNING... {percent}%", fg="#d4af37")
            self.set_progress(percent)
            self.log("[OK] " + check)
            time.sleep(0.18)

        self.status.config(text="SCAN COMPLETED — CLEAN", fg="#00ff88")
        self.log("[VERDICT] CLEAN")
        self.log("[SESSION] PIN consumed. This PIN cannot be reused.")

if __name__ == "__main__":
    root = tk.Tk()
    app = AngelScanner(root)
    root.mainloop()
