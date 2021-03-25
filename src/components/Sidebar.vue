<template>
  <section class="user-details">
    <div class="user-details">
      <div class="user-details__avatar-wrapper">
        <img
          class="user-details__change"
          :src="avatar"
          alt="Icon representing the user"
        />
        <p class="user-details__user-name">{{ userName }}</p>
        <p class="user-details__email">{{ email }}</p>
      </div>
      <div class="user-details__details-wrapper">
        <div id="hash" class="user-details__details-item">
          <p class="lead">hash:</p>
          <p class="data">*******</p>
        </div>
        <div id="phone" class="user-details__details-item">
          <p class="lead">Phone:</p>
          <p class="data">
            {{ phone }}
          </p>
          <button
            @click="$emit('update')"
            class="user-details__action-btn"
          >
            Edit
          </button>
        </div>
        <div id="b" class="user-details__details-item">
          <p class="lead">dummy:</p>
          <p class="data user-details__method">
            {{ dummy3 }}
          </p>
          <button
            v-if="b"
            @click="$emit('updateB')"
            class="user-details__action-btn"
          >
            Edit
          </button>
        </div>

        <div id="b" class="user-details__details-item">
          <p class="lead">dummy:</p>
          <p class="data user-details__method">
            {{ dummy3 }}
          </p>
          <button
            v-if="b"
            @click="$emit('updateB')"
            class="user-details__action-btn"
          >
            Edit
          </button>
        </div>
        <div
          v-if="a"
          id="lu"
          class="user-details__details-item"
        >
          <p class="lead">dummy:</p>
          <p class="data">dummy ending in {{ dummy2 }}</p>
          <button
            class="user-details__action-btn"
          >
            Edit
          </button>
        </div>
      </div>some change before space
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserDetails',
  props: {
    avatar: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userInfo: {
      type: Object,
      required: true,
    },
    buss: {
      type: Boolean,
      required: true,
    },
    cuss: {
      type: Boolean,
      required: true,
    },
    euss: {
      type: Object,
      required: true,
    },
  },
  computed: {
    email() {
      const { v } = this.b
      return v
    },
    phone() {
      const { c: a } = this.b
      return a || 'None'
    },
    dummy() {
      const { a } = this.b
      return a || 'None'
    },
    dummy2() {
      return 'dummy'
    },
    dummy3() {
      return 'some'
    },
  },
}
</script>

<style lang="scss" scoped>
.user-details {
  display: flex;
  flex-direction: column;
  margin: 55px 0;
  @include tablet {
    margin: 55px 82px 0 0;
  }
  &__a {
    width: 100%;
    background: linear-gradient(
      to bottom,
      #111111,
      #111111,
      #141414,
      var(--dark-gray),
      var(--dark-gray)
    );
    position: relative;
    margin: 0 0 50px 0;
    @include mobile {
      width: 500px;
    }
  }
  &__avatar-wrapper {
    padding: 0 65px;
    text-align: center;
    padding: 0 0 20px;
    margin: 90px 90px 0 0;
  }
  &__avatar {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 170px;
    border-radius: 100%;
  }
  &__user-name {
    color: var(--white);
    font-size: rem(26px);
    padding: 0;
    margin: 0;
  }
  &__email {
    font-size: rem(16px);
    color: var(--bright-gray);
  }
  &__details-wrapper {
    color: var(--white);
    padding: 25px;
    @include mobile {
      padding: 0px 50px 25px 50px;
      margin: 0 0 35px;
    }
  }
  &__details-item {
    display: flex;
    align-items: left;
    justify-content: flex-start;
    padding: 15px 0;
    flex-wrap: wrap;
    border-top: 1px solid #444444;
  }
  &__action-btn {
    background-color: transparent;
    border: none;
    color: var(--white);
    margin: 0 0 0 auto;
    padding: 0 0 0 15px;
    cursor: pointer;
    transition: 0.5s all ease;
    text-decoration: underline;
    &:hover {
      color: var(--orange);
      border-color: var(--orange);
    }
  }
  &__dashboard-btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--flat-black);
    height: 66px;
  }
  &__dashboard-btn {
    color: var(--white);
    display: inline;
    transition: 0.5s all ease;
    font-size: 16px;
    &:hover {
      color: var(--orange);
      border-color: var(--orange);
    }
  }
  .lead {
    font-size: rem(16px);
    color: var(--bright-gray);
  }
  .data {
    font-size: rem(16px);
    text-transform: none;
  }
  .material-icons {
    margin: 0 0 0 10px;
    font-size: 20px;
  }
}
</style>