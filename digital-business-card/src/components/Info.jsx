import syhrLogo from './../assets/syhrzkwn1.webp'

function Info() {
  return(
    <div className="info-container">
      <img src={syhrLogo} alt="syhrzkwn.dev logo" className="logo" />
      <h1 className="info-title">Syahir Zakwan</h1>
      <p className="info-subtitle">Software Developer</p>
      <span>👨🏻‍💻<a href="https://syhrzkwn.dev" target="_blank" className="info-link">syhrzkwn.dev</a></span>
      <div className="btn-group">
        <a href="mailto:mail@syhrzkwn.dev" className="btn btn-light"><i className="bi bi-send icon"></i>Email</a>
        <a href="https://linkedin.com/in/syhrzkwn" target="_blank" className="btn btn-primary"><i className="bi bi-linkedin icon"></i>LinkedIn</a>
      </div>
    </div>
  )
}

export default Info
