<template>
  <v-container fluid class="pa-0 feedback" style="min-height: 70vh">
    <v-layout class="my-1">
      <v-flex xs12>
        <div class="h1-divider">
          <div class="divtext">
            <h1>Онлайн-заявка</h1>
            <span></span>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-container class="mb-4">
      <v-layout justify-center>
        <v-flex xs12 sm9 md6>
          <v-card class="white pa-4 feedwindow text-xs-center">
            <v-form v-model="userForm.valid" ref="form" v-if="!loading && !complete">
              <v-card-text>
                <v-text-field
                  label="Ваше имя"
                  v-model="userForm.name"
                  :rules="userForm.nameRules"
                  name="name"
                  required
                ></v-text-field>
                <v-text-field
                  label="Ваш телефон"
                  v-model="userForm.phone"
                  :rules="userForm.phoneRules"
                  mask="(###) ### - ## - ##"
                  placeholder="(999) 999 - 99 - 99"
                  prefix="+7"
                  name="phone"
                  required
                ></v-text-field>
                <v-text-field
                  label="Ваш e-mail"
                  v-model="userForm.email"
                  :rules="userForm.emailRules"
                  name="email"
                  required
                ></v-text-field>
                <v-text-field v-model="userForm.message" multi-line label="Ваше сообщение"></v-text-field>
              </v-card-text>
              <v-card-text class="grey--text">
                <v-layout row wrap>
                  <v-flex xs2 md1>
                    <v-checkbox v-model="userForm.personal" class="blue--text pa-0"></v-checkbox>
                  </v-flex>
                  <v-flex xs10 md11>
                    <small>
                      Нажимая на кнопку, вы даете согласие на обработку своих персональных данных.
                      <a href="/user_agreement.pdf" target="_blank">Узнать больше</a>
                    </small>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions>
                <v-btn flat outline class="primary--text" @click.prevent="submit" :disabled="!userForm.personal">
                  Отправить
                </v-btn>
              </v-card-actions>
            </v-form>
            <v-progress-circular indeterminate v-bind:size="200" v-bind:width="7" color="primary"
                                 v-if="loading"></v-progress-circular>
            <v-card-text v-if="complete">
              <h3 class="green--text title">Сообщение отправлено</h3>
              <p class="title">Спасибо! Ваше сообщение успешно отправлено.
                Наши менеджеры обязательно свяжутся с Вами и ответят на все Ваши вопросы.
              </p>
              <nuxt-link to="/">Вернуться на главную</nuxt-link>
            </v-card-text>
          </v-card>
          <v-snackbar
            :timeout=3000
            :color="color"
            multi-line
            v-model="snackbar"
          >
            {{ text }}
            <v-btn dark flat @click.native="snackbar = false">Закрыть</v-btn>
          </v-snackbar>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    head: {
      title: 'Онлайн заявка',
      meta: [
        {hid: 'description', name: 'description', content: 'Онлайн заявка рекламного агентства КОРОНА PRINT'}
      ]
    },
    data () {
      return {
        loading: false,
        snackbar: false,
        complete: false,
        color: '',
        text: '',
        userForm: {
          valid: false,
          personal: false,
          name: '',
          nameRules: [
            (v) => !!v || 'Имя обязательно'
          ],
          phone: '',
          phoneRules: [
            (v) => !!v || 'Телефон обязательно'
          ],
          email: '',
          emailRules: [
            (v) => !!v || 'E-mail обязательно'
          ],
          message: ''
        }
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.loading = !this.loading
          let data = new FormData()
          data.append('name', this.userForm.name)
          data.append('phone', this.userForm.phone)
          data.append('email', this.userForm.email)
          data.append('message', this.userForm.message)
          this.$axios.post(`/feedback/`, data)
            .then(res => {
              this.text = 'Сообщение отправлено!'
              this.color = 'success'
              this.snackbar = true
              this.loading = !this.loading
              this.complete = !this.complete
            })
            .catch(err => {
              this.text = 'Произошла ошибка!'
              this.color = 'error'
              this.snackbar = true
              this.loading = !this.loading
              console.log(err)
            })
        }
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>
  .feedback {
    z-index: 2;
  }

  .feedwindow {
    position: relative;
    background-color: #fff;
    z-index: auto;
  }

  .feedwindow:after,
  .feedwindow:before {
    background-color: #fff;
    visibility: visible;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
    border: 1px solid rgba(34, 36, 38, .15);
    box-shadow: '';
    box-sizing: inherit;
  }

  .feedwindow:before {
    -webkit-transform: rotate(-1.2deg);
    transform: rotate(-1.2deg);
    top: 0;
    z-index: -2;
  }

  .feedwindow:after {
    -webkit-transform: rotate(1.2deg);
    transform: rotate(1.2deg);
    top: 0;
    z-index: -2;
  }
</style>
