import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginProf = () => {
  const [identifier, setIdentifier] = useState("");
  const [mdp, setMdp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logique de validation des erreurs
    if (!identifier) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Identifiant erroné',
      });
      return;
    }

    if (!mdp) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: "Nom d'utilisateur vide",
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Succès',
      text: 'Connexion avec succès',
    }).then(() => {
      navigate('Professeur');
    });
  };

  return (
    <>
      <section className='h-screen w-full flex justify-center items-center'>
        <div className='w-11/12 mx-autosm flex sm:justify-center sm:items-center relative'>
          <div className='w-full sm:w-96'>
            <div className="w-full grid grid-cols-1 justify
            center items-center">
              <div className="w-56 mx-auto">
                <img src="./img/Logo.png" alt="Logo emiting" className="" />
              </div>
              <div className="-translate-y-full -mt-10">
                <h2 className="text-2xl font-semibold text-center italic">Emiting</h2>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="w-full bg-white mb-5 border rounded-md">
                <input
                  type="text"
                  placeholder="Votre identifiant"
                  className="px-5 py-4 w-full outline-none"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
              </div>

              <div className="w-full bg-white mb-10 border rounded-md">
                <input
                  type="password"
                  placeholder="Votre Mot de passe"
                  className="px-5 py-4 w-full outline-none"
                  value={mdp}
                  onChange={(e) => setMdp(e.target.value)}
                />
              </div>

              <div className="w-full bg-white mb-5 border">
                <button
                  type="submit"
                  className="px-5 py-4 w-full outline-none text-white bg-blue-400 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-600 transition-all rounded-md"
                >
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginProf;
