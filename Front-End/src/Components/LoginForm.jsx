function LoginForm({ handleSubmit, handleUsernameChange, handlePasswordChange, username, password }) {
  return (
    <div>
      <h2>Iniciar Sesion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          nombre de usuario
          <input value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          contraseña
          <input value={password} onChange={handlePasswordChange} />
        </div>
        <button type='submit'>Iniciar Sesion</button>
      </form>
    </div>
  )
}

export default LoginForm