// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('../img/', true, /\.(png|jpg|jpeg|gif|svg|ico)$/));