import Service from '@ember/service'
import { tracked } from '@glimmer/tracking'

export default class UserDataService extends Service {
  @tracked user = {
    first_name: '',
    last_name: '',
    street_address: '',
    city: '',
    zip_code: null,
    cpr_number: null,
    department: '',
    position: '',
    phone_number: null,
    email: '',
    password: '',
    is_admin: false,
  }
}
