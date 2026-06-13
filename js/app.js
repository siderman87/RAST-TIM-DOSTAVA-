function login() {
  const pin = document.getElementById("pin").value;

  const users = {
    "0000": { role: "admin", name: "Admin" },
    "1111": { role: "voznik", name: "ROK" },
    "2222": { role: "voznik", name: "ANŽE" },
    "3333": { role: "voznik", name: "BLAŽ" },
    "4444": { role: "voznik", name: "AJDIN" },
    "5555": { role: "voznik", name: "MATEVŽ" }
  };

  if (users[pin]) {
    localStorage.setItem("user", JSON.stringify(users[pin]));

    if (users[pin].role === "admin") {
      window.location.href = "pages/admin.html";
    } else {
      window.location.href = "pages/voznik.html";
    }
  } else {
    document.getElementById("message").innerText = "Napačen PIN";
  }
}
