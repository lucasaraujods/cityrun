'use client';



import './NotificacaoPage.css'; // ajuste conforme o caminho real do CSS
import { useRouter } from 'next/navigation';

export default function NotificacaoPage() {
    return (

    <div className="notifications-container">
        
        <header>
            <h1>Notificações</h1>
        </header>
        
        <h2>Suas Notificações</h2>
        
        <div className="notification">
            <i className="fas fa-heart icon"></i>
            <div className="notification-content">
                <strong>Maria Oliveira</strong> curtiu seu post sobre a corrida de 10km!
                <div className="notification-time">2 minutos atrás</div>
            </div>
            <div className="interaction-buttons">
                <button className="btn"><i className="fas fa-thumbs-up"></i> Curtir</button>
                <button className="btn"><i className="fas fa-reply"></i> Responder</button>
                <button className="btn"><i className="fas fa-times"></i> Ignorar</button>
            </div>
        </div>
    
        <div className="notification">
            <i className="fas fa-comment icon"></i>
            <div className="notification-content">
                <strong>Lucas Pereira</strong> comentou: "Ótimo tempo! Vamos correr juntos?" 
                <div className="notification-time">10 minutos atrás</div>
            </div>
            <div className="interaction-buttons">
                <button className="btn"><i className="fas fa-thumbs-up"></i> Curtir</button>
                <button className="btn"><i className="fas fa-reply"></i> Responder</button>
                <button className="btn"><i className="fas fa-times"></i> Ignorar</button>
            </div>
        </div>
    
        <div className="notification">
            <i className="fas fa-trophy icon"></i>
            <div className="notification-content">
                Você completou o desafio de 5km! Parabéns! 🎉
                <div className="notification-time">30 minutos atrás</div>
            </div>
            <div className="interaction-buttons">
                <button className="btn"><i className="fas fa-thumbs-up"></i> Curtir</button>
                <button className="btn"><i className="fas fa-reply"></i> Responder</button>
                <button className="btn"><i className="fas fa-times"></i> Ignorar</button>
            </div>
        </div>
    
        <div className="notification">
            <i className="fas fa-user-friends icon"></i>
            <div className="notification-content">
                <strong>João Silva</strong> te desafiou para uma corrida de 10km! Aceite?
                <div className="notification-time">1 hora atrás</div>
            </div>
            <div className="interaction-buttons">
                <button className="btn"><i className="fas fa-thumbs-up"></i> Curtir</button>
                <button className="btn"><i className="fas fa-reply"></i> Responder</button>
                <button className="btn"><i className="fas fa-times"></i> Ignorar</button>
            </div>
        </div>
    
        <div className="notification">
            <i className="fas fa-envelope icon"></i>
            <div className="notification-content">
                Você recebeu uma nova mensagem de <strong>Clara Santos</strong>.
                <div className="notification-time">2 horas atrás</div>
            </div>
            <div className="interaction-buttons">
                <button className="btn"><i className="fas fa-thumbs-up"></i> Curtir</button>
                <button className="btn"><i className="fas fa-reply"></i> Responder</button>
                <button className="btn"><i className="fas fa-times"></i> Ignorar</button>
            </div>
        </div>
    
        <div className="clear-all">
            <button className="btn">Limpar Todas as Notificações</button>
        </div>


        <footer>
            <div className="nav-icons">
                <a href="estatisticas.html" className="icon" id="favorites-btn">📊</a>
                <a href="chat.html" className="icon" id="favorites-btn">✉️</a>
                <a href="/projetos/CityRun/php/feed.php" className="icon home-icon" id="home-btn">🏠</a>
                <a href="notificacao.html" className="icon" id="favorites-btn">🤍</a>
                <a href="/projetos/CityRun/php/perfil.php" className="icon" id="profile-btn">👤</a>
            </div>
        </footer>

    </div>

    );
}