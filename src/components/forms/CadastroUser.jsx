import { useState } from "react"



export const Cadastro = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      role: ''
    });

    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const { username, email, password, role } = formData;
      const newErrors = {};
  
      if (!username) newErrors.username = 'Username é obrigatório';
      if (!email) newErrors.email = 'Email é obrigatório';
      if (!password) newErrors.password = 'Password é obrigatório';
      if (!role) newErrors.role = 'Role é obrigatório';
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
  
      console.log('Formulário enviado', formData);
      
      setFormData({
        username: '',
        email: '',
        password: '',
        role: ''
      });
      setErrors({});
    };
  
    return (
      <>
        <div className="max-w-lg mx-auto p-4  bg-gray-100 shadow-md rounded-lg mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">Cadastro</h2>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
  
        
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
  
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
  
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              >
                <option value="">Selecione um papel</option>
                <option value="Admin">Admin</option>
                <option value="Donor">Donor</option>
                <option value="Requester">Requester</option>
              </select>
              {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
            </div>
  
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg- bg-verde-100 text-white font-semibold rounded-md shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };