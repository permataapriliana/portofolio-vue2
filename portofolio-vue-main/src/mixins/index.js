import { mapGetters } from 'vuex';

export default {
  data: () => ({}),
  computed: {
    ...mapGetters(
      ['getSiteInfo', 'getProject'],
    ),
  },
  methods: {},
};
