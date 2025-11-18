import submitForm from "./submitForm";

export default function App() {
  return (
    <form
      method="post"
      action="https://questions.greatfrontend.com/api/questions/contact-form"
      onSubmit={submitForm}
    >
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="textArea">TextArea</label>
      <textarea name="message" id="textArea" />

      <button type="submit"> submit</button>
    </form>
  );
}





const SUBMIT_URL =
  'https://questions.greatfrontend.com/api/questions/contact-form';

export default async function submitForm(event) {
  event.preventDefault();
  const form = event.target;

  try {
    if (form.action !== SUBMIT_URL) {
      alert('Incorrect form action value');
      return;
    }

    if (form.method.toLowerCase() !== 'post') {
      alert('Incorrect form method value');
      return;
    }

    const formData = new FormData(form);
    const response = await fetch(SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    });

    const text = await response.text();
    alert(text);
  } catch (_) {
    alert('Error submitting form!');
  }
}
