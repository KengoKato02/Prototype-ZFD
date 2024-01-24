/* eslint-disable */
import Route from '@ember/routing/route'
import { service } from '@ember/service'
import { action } from '@ember/object'

export default class AuthenticatedProfileRoute extends Route {
  @service userData
  @service session

  async model() {
    return await this.userData.user
  }

  setupController(controller, model, transition) {
    super.setupController(controller, model, transition)
    this.controller.set('user', model)
    this.controller.set(
      'updateProfilePersonalInfo',
      this.updateProfilePersonalInfo.bind(this)
    )
    // this.controller.set()
  }

  //write me an update profile function
  @action
  updateProfilePersonalInfo(user) {
    console.log('called')
    this.userData.first_name = user.first_name
    this.userData.last_name = user.last_name
    this.userData.street_address = user.street_address
    this.userData.city = user.city
    this.userData.zip_code = user.zip_code
    this.userData.cpr_number = user.cpr_number
    // this.userData.department = user.department;
    this.userData.position = user.position

    console.log(this.userData.user)
  }
}
