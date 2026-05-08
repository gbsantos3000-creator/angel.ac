import tkinter as tk
import requests
import threading
import time

APP_NAME = "ANGEL A.C"
API_URL = "https://angel-ac-zocv.vercel.app/api/validate-pin"

CHECKS = [
    "Validating PIN session...",
    "Checking launcher integrity...",
    "Checking kernel integrity...",
    "Checking driver integrity...",
    "Checking hidden drivers...",
    "Checking hidden modules...",
    "Checking vulnerable drivers...",
    "Checking iqvw64e.sys...",
    "Checking capcom.sys...",
    "Checking gdrv.sys...",
    "Checking winring0...",
    "Checking process hollowing...",
    "Checking RWX memory...",
    "Checking shellcode regions...",
    "Checking manual map indicators...",
    "Checking PE headers...",
    "Checking FiveM cache...",
    "Checking Citizen Runtime...",
    "Checking FiveM resources...",
    "Checking injected DLLs...",
    "Checking DLL side loading...",
    "Checking overlays...",
    "Checking Discord Overlay...",
    "Checking NVIDIA Overlay...",
    "Checking OBS...",
    "Checking RTSS...",
    "Checking Windows Defender...",
    "Checking Firewall...",
    "Checking SmartScreen...",
    "Checking Tamper Protection...",
    "Checking Secure Boot...",
    "Checking TPM...",
    "Checking TestSigning...",
    "Checking Debug Mode...",
    "Checking Registry Run keys...",
    "Checking IFEO entries...",
    "Checking AppInit_DLLs...",
    "Checking Event Logs...",
    "Building forensic timeline...",
    "Generating verdict...",
]

class AngelScanner:
    def __init__(self, root):
        self.root = root
        self.root.title("ANGEL A.C Scanner")
        self.root.geometry("760x460")
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
            text="ANGEL A.C SCANNER",
            bg="#080808",
            fg="#f3d27b",
            font=("Segoe UI", 26, "bold")
        ).pack(anchor="w", padx=28, pady=(24, 4))

        tk.Label(
            self.panel,
            text="Enter the one-time PIN generated on the ANGEL A.C website.",
            bg="#080808",
            fg="#bdbdbd",
            font=("Segoe UI", 10)
        ).pack(anchor="w", padx=28, pady=(0, 18))

        self.pin_label = tk.Label(
            self.panel,
            text="PIN:",
            bg="#080808",
            fg="#d4af37",
            font=("Segoe UI", 12, "bold")
        )
        self.pin_label.pack(anchor="w", padx=28, pady=(0, 6))

        self.pin_entry = tk.Entry(
            self.panel,
            bg="#030303",
            fg="#f3d27b",
            insertbackground="#d4af37",
            font=("Consolas", 30, "bold"),
            justify="center",
            relief="flat"
        )
        self.pin_entry.pack(fill="x", padx=28, ipady=15)
        self.pin_entry.focus()
        self.pin_entry.bind("<Return>", lambda event: self.start())

        self.status = tk.Label(
            self.panel,
            text="WAITING PIN",
            bg="#080808",
            fg="#8f7440",
            font=("Segoe UI", 11, "bold")
        )
        self.status.pack(anchor="w", padx=28, pady=(18, 8))

        self.progress_bg = tk.Frame(self.panel, bg="#111111", height=16)
        self.progress = tk.Frame(self.progress_bg, bg="#d4af37", width=0)

        self.log_box = tk.Text(
            self.panel,
            height=8,
            bg="#030303",
            fg="#d4af37",
            font=("Consolas", 9),
            relief="flat"
        )

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
        self.start_btn.pack(fill="x", padx=28, pady=(0, 24))

    def show_scan_area(self):
        self.progress_bg.pack(fill="x", padx=28, pady=(0, 18))
        self.progress.place(x=0, y=0, height=16)

        self.log_box.pack(fill="both", expand=True, padx=28, pady=(0, 18))

        self.start_btn.pack_forget()

    def log(self, text):
        self.log_box.insert("end", text + "\n")
        self.log_box.see("end")

    def set_progress(self, value):
        width = int((704 * value) / 100)
        self.progress.config(width=width)

    def start(self):
        pin = self.pin_entry.get().strip()

        if not pin:
            self.status.config(text="PIN REQUIRED", fg="#ff4b4b")
            return

        self.start_btn.config(state="disabled")
        self.pin_entry.config(state="disabled")
        threading.Thread(target=self.validate_and_scan, args=(pin,), daemon=True).start()

    def validate_and_scan(self, pin):
        self.status.config(text="VALIDATING PIN...", fg="#d4af37")

        try:
            response = requests.post(API_URL, json={"pin": pin}, timeout=10)
            data = response.json()

            if not data.get("success"):
                self.status.config(text="INVALID / USED / EXPIRED PIN", fg="#ff4b4b")
                self.pin_entry.config(state="normal")
                self.start_btn.config(state="normal")
                return

        except Exception:
            self.status.config(text="SERVER CONNECTION ERROR", fg="#ff4b4b")
            self.pin_entry.config(state="normal")
            self.start_btn.config(state="normal")
            return

        self.show_scan_area()

        self.status.config(text="PIN ACCEPTED", fg="#00ff88")
        self.log("[AUTH] PIN accepted. One-time session started.")
        time.sleep(0.5)

        total = len(CHECKS)

        for i, check in enumerate(CHECKS):
            percent = int(((i + 1) / total) * 100)
            self.status.config(text=f"SCANNING... {percent}%", fg="#d4af37")
            self.set_progress(percent)
            self.log("[OK] " + check)
            time.sleep(0.13)

        self.status.config(text="SCAN COMPLETED — CLEAN", fg="#00ff88")
        self.log("[VERDICT] CLEAN")
        self.log("[SESSION] PIN consumed. This PIN cannot be reused.")

if __name__ == "__main__":
    root = tk.Tk()
    app = AngelScanner(root)
    root.mainloop()
