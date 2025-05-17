'use client';


import { useEffect, useRef, useState } from 'react';
import './CriacaoPage.css'; // ajuste conforme o caminho real do CSS
import { useRouter } from 'next/navigation';


export default function PerfilPage() {
  
  const router = useRouter();
  const profilePicInputRef = useRef<HTMLInputElement | null>(null);
  const previewRef = useRef<HTMLImageElement | null>(null);
  const bioInputRef = useRef<HTMLTextAreaElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const bioFeedbackRef = useRef<HTMLSpanElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [bioLength, setBioLength] = useState(0);


  useEffect(() => {
    const profilePicInput = profilePicInputRef.current;
    const preview = previewRef.current;
    const bioInput = bioInputRef.current;
    const bioFeedback = bioFeedbackRef.current;
    const profileForm = formRef.current;
    const username = usernameRef.current;
    const age = ageRef.current;

    // Atualizar pré-visualização da foto
    profilePicInput?.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) return;

      const fileType = file.type.split('/')[0];
      if (fileType !== 'image') {
        alert('Por favor, escolha uma imagem.');
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        alert('A imagem deve ter no máximo 2MB.');
        return;
      }

      if (preview) {
        preview.src = URL.createObjectURL(file);
      }
    });

    // Atualizar contador de caracteres da bio
    bioInput?.addEventListener('input', () => {
      const valueLength = bioInput.value.length;
      setBioLength(valueLength);
      if (bioFeedback) {
        bioFeedback.textContent = `${valueLength}/150 caracteres`;
      }
    });

    // Validar envio do formulário
    profileForm?.addEventListener('submit', (event) => {
      event.preventDefault();

      if (
        !username?.value ||
        !age?.value ||
        !profilePicInput?.files ||
        profilePicInput.files.length === 0
      ) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      alert('Perfil salvo com sucesso!');
    });
  }, []);

  return (
    <div className="container">
      <h2>Editar Perfil</h2>
      <form ref={formRef} id="profileForm">
        <div>
          <label htmlFor="username">Nome de usuário:</label>
          <input type="text" id="username" name="username" ref={usernameRef} required />
        </div>

        <div>
          <label htmlFor="age">Idade:</label>
          <input type="number" id="age" name="age" ref={ageRef} required />
        </div>

        <div>
          <label htmlFor="profilePic">Foto de Perfil:</label>
          <input type="file" id="profilePic" name="profilePic" accept="image/*" ref={profilePicInputRef} required />
        </div>

        <div>
          <img ref={previewRef} id="preview" alt="Pré-visualização" width={150} height={150} />
        </div>

        <div>
          <label htmlFor="bio">Biografia:</label>
          <textarea id="bio" name="bio" maxLength={150} ref={bioInputRef}></textarea>
          <span id="bioFeedback" ref={bioFeedbackRef}>
            {bioLength}/150 caracteres
          </span>
        </div>

        <button type="submit" name="submit" className="signup-btn" onClick={() => router.push("/feed")}>
          Criar Perfil
        </button>
      </form>
    </div>
  );
}
