const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://127.0.0.1:5000/api/suggest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ skill, interest }),
    });

    const data = await response.json();
    setResult(data.career);
  } catch (error) {
    console.error("Error fetching career suggestion:", error);
  }
};
