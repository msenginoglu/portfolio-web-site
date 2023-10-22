import "./App.css";
import ProfilePicture from "./assets/profile-picture.png";
import AboutMePicture from "./assets/about-me-picture.png";
import { useState } from "react";
import { BiSolidPizza } from "react-icons/bi";
import { MdOutlineRoomService } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import SekipPizzaLogo from "./assets/sekip-pizza-logo.png";
import VoidPizzaLogo from "./assets/void-pizza-logo.png";
import KamuranPizzaLogo from "./assets/kamuran-pizza-logo.png";
import SekipUstaCv from "./assets/sekip-usta-cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";

function App() {
  const [about, setAbout] = useState("skills");
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  return (
    <>
      {/* ********************header****************** */}
      <header className="header">
        <span className="logo">
          <a href="#">
            Şekip
            <span style={{ color: "red" }}>Usta</span>
          </a>
        </span>

        <GiHamburgerMenu
          className="hamburger-menu"
          style={{ fontSize: "2.5rem" }}
          onClick={() => setHamburgerMenu(!hamburgerMenu)}
        />

        <nav className={hamburgerMenu ? "navMobile" : "nav"}>
          <ul className="nav-ul">
            <li>
              <a href="#about">Hakkımda</a>
            </li>
            <li>
              <a href="#skills">Yeteneklerim</a>
            </li>
            <li>
              <a href="#xp">Tecrübelerim</a>
            </li>
            <li>
              <a href="#education">Eğitimim</a>
            </li>
            <li>
              <a href="#cv">Özgeçmiş</a>
            </li>
            <li>
              <a href="#contact">İletişim</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* *********main************ */}
      <main>
        {/* ******************hero************* */}
        <section className="hero">
          <div className="hero-content">
            <p style={{ fontSize: "1.5rem" }}>Lezzetin Efendisi</p>
            <p>
              Selamlar, benim adım <span style={{ color: "red" }}>Şekip</span>
            </p>
            <p>
              Void City'nin unutulmaz <br />
              <span style={{ color: "red" }}>pizza</span> ustasıyım.
            </p>
          </div>
          <img src={ProfilePicture} alt="Şekip Usta'nın resmi" />
        </section>

        {/* **********************Hakkımda*************** */}
        <section className="about">
          <div className="about-description" id="about">
            <h1>Hakkımda</h1>
            <p>
              Void City'nin en ünlü pizza ustasıyım. İtalyan pizzalarının
              sırlarını keşfederek, lezzetli ve unutulmaz pizzalar yapıyorum.
              Aşağıda yer alan Yeteneklerim/Deneyimlerim/Eğitimim başlıklarına
              tıklayarak özet bilgilerimi görebilirsiniz.
            </p>

            <div className="about-summary">
              <div className="about-summary-skills">
                <h2
                  onClick={() => setAbout("skills")}
                  className={about === "skills" ? "active" : ""}
                >
                  Yeteneklerim
                </h2>
                {about === "skills" && (
                  <>
                    <h3>Aşçılık</h3>
                    <p>Unutulmaz lezzette İtalyan pizzaları yapabilme</p>
                    <h3>Sunum</h3>
                    <p>Pizzalarımı müşterilerime en iyi şekilde sunabilme</p>
                    <h3>Yöneticilik</h3>
                    <p>
                      Restoranımdaki personelin görevlerini mükemmel bir şekilde
                      koordine edebilme
                    </p>
                  </>
                )}
              </div>

              <div className="about-summary-experience">
                <h2
                  onClick={() => setAbout("xp")}
                  className={about === "xp" ? "active" : ""}
                >
                  Deneyimlerim
                </h2>
                {about === "xp" && (
                  <>
                    <h3>2018-Halen</h3>
                    <p>Şekip Pizza Restaurant Yöneticisi</p>
                    <h3>2009-2018</h3>
                    <p>Void Restaurant pizza şefi</p>
                    <h3>2006-2009</h3>
                    <p>Kamuran Restourant pizza yapım personeli</p>
                  </>
                )}
              </div>

              <div className="about-summary-education">
                <h2
                  onClick={() => setAbout("education")}
                  className={about === "education" ? "active" : ""}
                >
                  Eğitimim
                </h2>
                {about === "education" && (
                  <>
                    <h3>2006</h3>
                    <p>Void Üniversitesi - Gastronomi ve Mutfak Sanatları </p>
                    <h3>2002</h3>
                    <p>Void Pizzacılık Meslek Lisesi</p>
                    <h3>1994</h3>
                    <p>Void İlkokulu</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <img src={AboutMePicture} alt="About me picture" />
        </section>
        {/* ************Yetenekler************* */}
        <section className="skills" id="skills">
          <h1>Öne Çıkan Yeteneklerime Göz Atın</h1>

          <div className="skills-container">
            <div className="skills-container-card1">
              <BiSolidPizza style={{ width: "250px", height: "100px" }} />
              <h2>Enfes İtalyan Pizza Yapımı</h2>
              <p>
                Şekip Usta'nın İtalyan pizzaları, lezzetli bir deneyim sunar.
                Kendine has tarifleri ve ustalığı ile her pizza, unutulmaz bir
                tat bırakır. Şekip Usta'nın pizzaları, sadece bir yemek değil,
                aynı zamanda bir sanat eseridir.
              </p>
            </div>

            <div className="skills-container-card2">
              <MdOutlineRoomService
                style={{ width: "250px", height: "100px" }}
              />
              <h2>Mükemmel Sunum</h2>
              <p>
                Şekip Usta, pizzalarını bir sanat eseri gibi sunar. Her pizza,
                lezzet ve görsellik açısından bir şölen sunar. Müşteriler,
                sadece damak zevklerine hitap eden lezzetli pizzalar değil, aynı
                zamanda göz zevklerine hitap eden estetik bir sunum beklerler.
                Şekip Usta'nın mükemmel sunumu, onun pizzalarını diğerlerinden
                ayıran özgün bir özelliktir.
              </p>
            </div>

            <div className="skills-container-card3">
              <MdFoodBank style={{ width: "250px", height: "100px" }} />
              <h2>Özgün Tarifler</h2>
              <p>
                Şekip Usta'nın pizzaları sıradan pizzalarla karşılaştırılamaz.
                Kendine özgü tarifleri ve benzersiz lezzet kombinasyonları ile
                her pizza, damaklarda unutulmaz bir iz bırakır. Şekip Usta'nın
                pizzaları, sadece bir yemek değil, aynı zamanda bir deneyimdir.
              </p>
            </div>
          </div>
        </section>

        <section className="xp" id="xp">
          <h1>Tecrübelerim</h1>
          <div className="xp-wrapper">
            <div className="xp-item">
              <img src={SekipPizzaLogo} alt="Şekip Pizza'nın logosu" />
              <div className="xp-item-description">
                <h2>2018 - Halen</h2>
                <h3>Şekip Pizza Restaurant Yöneticisi</h3>
                <p>
                  Void City'nin en popüler pizza restoranını yönetiyorum.
                  Burada, lezzetli pizzalar yapıyorum ve müşterilerime unutulmaz
                  bir deneyim sunuyorum.
                </p>
              </div>
            </div>

            <div className="xp-item">
              <img src={VoidPizzaLogo} alt="Void Pizza'nın logosu" />
              <div className="xp-item-description">
                <h2>2009 - 2018</h2>
                <h3>Void Restaurant Pizza Şefi</h3>
                <p>
                  Void Restaurant'ta pizza şefi olarak görev yaptım. Bu süre
                  zarfında, pizza yapımında ustalaştım ve birçok lezzetli tarif
                  geliştirdim.
                </p>
              </div>
            </div>

            <div className="xp-item">
              <img src={KamuranPizzaLogo} alt="Kamuran Pizza'nın logosu" />
              <div className="xp-item-description">
                <h2>2006 - 2009</h2>
                <h3>Kamuran Restaurant Pizza Yapım Personeli</h3>
                <p>
                  Pizza yapım personeli olarak başladığım kariyerimde, mutfakta
                  çalışmanın inceliklerini öğrendim ve pizzacılık konusunda
                  değerli deneyimler kazandım.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="education" id="education">
          <h1>Eğitimim</h1>
          <div className="education-item">
            <h2>2006</h2>
            <h3>Void Üniversitesi - Gastronomi ve Mutfak Sanatları</h3>
            <p>
              Burada, gastronomi ve mutfak sanatları üzerine kapsamlı bir eğitim
              aldım ve İtalyan pizzalarının sırlarını keşfettim.
            </p>
          </div>
          <div className="education-item">
            <h2>2002</h2>
            <h3>Void Pizzacılık Meslek Lisesi</h3>
            <p>
              Pizzacılık üzerine yoğunlaştığım bu okulda, pizza yapımının
              temellerini öğrendim.
            </p>
          </div>
          <div className="education-item">
            <h2>1994</h2>
            <h3>Void İlkokulu</h3>
            <p>İlkokul eğitimimi Void İlkokulu'nda tamamladım.</p>
          </div>
        </section>

        <section className="cv" id="cv">
          <h1>Özgeçmişimi İndirin</h1>
          <p>
            Daha detaylı bilgi edinmek için aşağıdan özgeçmişimi
            indirebilirsiniz.
          </p>
          <a href={SekipUstaCv} download="Şekip Usta CV">
            <AiOutlineDownload
              className="download"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                boxShadow: "0 0 20px red",
                backgroundColor: "red",
                marginTop: "25px",
                marginBottom: "25px",
                padding: "10px",
              }}
            />
          </a>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="logoAndContactWrapper">
          <span className="logo">
            <a href="#">
              Şekip
              <span style={{ color: "red" }}>Usta</span>
            </a>
          </span>
          <section className="social-media">
            <a href="https://www.linkedin.com" target="_blank">
              <AiFillLinkedin fontSize={"2.5rem"} />
            </a>

            <a href="https://www.facebook.com" target="_blank">
              <BiLogoFacebook fontSize={"2.5rem"} />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <AiOutlineInstagram fontSize={"2.5rem"} />
            </a>
            <a href="https://www.x.com" target="_blank">
              <FaXTwitter fontSize={"2.5rem"} />
            </a>
          </section>
          <section className="contact">
            <h3>Bana Ulaşın</h3>
            <p>sekipusta@sekipusta.com</p>
            <p>(216) 999-999</p>
          </section>
        </div>

        <small>© 2023 Şekip Usta. Tüm hakları saklıdır.</small>
        <small style={{ background: "red", textAlign: "center" }}>
          Bu web sitesi Muhammet Şükrü ENGİNOĞLU tarafından kodlanmıştır. Atıfta
          bulunarak kendi projelerinizde kullanabilirsiniz.
        </small>
      </footer>
    </>
  );
}

export default App;
