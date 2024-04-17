import React, { useContext, useState } from "react";
import { jwtDecode } from "jwt-decode"; 
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
import './styles/Navbar.css';


import { Dialog, DialogTitle, DialogContent, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import teamImage from '../Assets/images/nasteam.PNG';



function Navbar() {
  const { logoutUser } = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")
  const [showDropdown, setShowDropdown] = useState(false);
  const [contactsModalOpen, setContactsModalOpen] = useState(false);

  let user_id;

  if (token) {
    const decoded = jwtDecode(token); 
    user_id = decoded.user_id;
  }

  const toggleContactsModal = () => {
    setContactsModalOpen(!contactsModalOpen);
  };

  return (
    <div className="navbar-background-style">
      <nav className="navbar">
        <Link to="/" className="navbar-logo">DOCLAB</Link>
        <div className="navbar-links"> 
          {token === null ? (
            <>
            
              <Link className="nav-link" to="/">Главная</Link>
             

              <div className="nav-link dropdown" 
                   onMouseEnter={() => setShowDropdown(true)} 
                   onMouseLeave={() => setShowDropdown(false)}>
                О нас
                {showDropdown && (
                  <div className="dropdown-content">
                    <Link to="/laboratory">О лаборатории</Link>
                    <Link to="/teamdoclab">Команда DOCLAB</Link>
                    <Link to="/specialistdoclab">Специалисты DOCLAB</Link>
                    <Link to="/ourpartners">Наши партнеры</Link>
                    <Link to="/reviews">Отзывы</Link>
                    <Link to="/careers">Вакансии</Link>
                    <Link to="/licencecertificates">Лицензии и сертификаты</Link>
                  </div>
                )}
              </div>

              <div className="nav-link dropdown" 
                   onMouseEnter={() => setShowDropdown(true)} 
                   onMouseLeave={() => setShowDropdown(false)}>
                  Пациентам
                {showDropdown && (
                  <div className="dropdown-content">
                    <Link to="/cost">Стоимость исследований</Link>
                    <Link to="/services">Услуги</Link>
                    <Link to="/instructersforpatients">Инструкция для пациента</Link>
                    <Link to="/order">Заказать исследование</Link>
                    <Link to="/popularquestions">Популярные вопросы</Link>
                  </div>
                )}
              </div>

              <div className="nav-link dropdown" 
                   onMouseEnter={() => setShowDropdown(true)} 
                   onMouseLeave={() => setShowDropdown(false)}>
                  Врачам
                {showDropdown && (
                  <div className="dropdown-content">
                    <Link to="/forclients">Памятка для клиента</Link>
                    <Link to="/costlaboratoriesservices">Стоимость лабораторных услуг</Link>
                  </div>
                )}
              </div>
              <div className="nav-link nav-link-contacts nav-link-contacts-bold" onClick={toggleContactsModal} style={{ cursor: 'pointer' }}>
            Контакты
          </div>
              
              &nbsp;&nbsp;&nbsp;
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Register</Link>
            </>
          ) : (
            <>
               <Link className="nav-link" to="/">Главная</Link>
             

             <div className="nav-link dropdown" 
                  onMouseEnter={() => setShowDropdown(true)} 
                  onMouseLeave={() => setShowDropdown(false)}>
               О нас
               {showDropdown && (
                 <div className="dropdown-content">
                   <Link to="/laboratory">О лаборатории</Link>
                   <Link to="/teamdoclab">Команда DOCLAB</Link>
                   <Link to="/specialistdoclab">Специалисты DOCLAB</Link>
                   <Link to="/ourpartners">Наши партнеры</Link>
                   <Link to="/reviews">Отзывы</Link>
                   <Link to="/careers">Вакансии</Link>
                   <Link to="/licencecertificates">Лицензии и сертификаты</Link>
                 </div>
               )}
             </div>

             <div className="nav-link dropdown" 
                  onMouseEnter={() => setShowDropdown(true)} 
                  onMouseLeave={() => setShowDropdown(false)}>
                 Пациентам
               {showDropdown && (
                 <div className="dropdown-content">
                   <Link to="/cost">Стоимость исследований</Link>
                   <Link to="/services">Услуги</Link>
                   <Link to="/instructersforpatients">Инструкция для пациента</Link>
                   <Link to="/order">Заказать исследование</Link>
                   <Link to="/popularquestions">Популярные вопросы</Link>
                 </div>
               )}
             </div>

             <div className="nav-link dropdown" 
                  onMouseEnter={() => setShowDropdown(true)} 
                  onMouseLeave={() => setShowDropdown(false)}>
                 Врачам
               {showDropdown && (
                 <div className="dropdown-content">
                   <Link to="/forclients">Памятка для клиента</Link>
                   <Link to="/costlaboratoriesservices">Стоимость лабораторных услуг</Link>
                 </div>
               )}
             </div>
             <div className="nav-link nav-link-contacts nav-link-contacts-bold" onClick={toggleContactsModal} style={{ cursor: 'pointer' }}>
            Контакты
          </div>
              <Link className="nav-link" onClick={logoutUser} style={{cursor: "pointer"}}>Logout</Link>
            </>
          )}
        </div>
        <Dialog
          open={contactsModalOpen}
          onClose={toggleContactsModal}
          maxWidth="xl" // Adjusts the maximum size of the dialog
          onClick={toggleContactsModal} // Closes the modal when the image or area outside the image is clicked
          PaperProps={{
            style: { backgroundColor: 'transparent', boxShadow: 'none' }, // Removes background and shadow
          }}
        >
          <img src={teamImage} alt="Team" style={{ width: '100%', height: '90vh', objectFit: 'cover' }} />
        </Dialog>
      </nav>
    </div>
  );
}

export default Navbar;