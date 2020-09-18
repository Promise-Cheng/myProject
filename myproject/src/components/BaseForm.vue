<script>
  import field from '@/components/field/index';
  import fieldGroup from '@/components/field-group/index';
  import BaseMixin from "@/mixin/baseMixin";
  import Header from "@/components/header/publicHeader";

  export default {
    name: "BaseForm",
    mixins: [BaseMixin],
    components: {field, fieldGroup, Header},
    data() {
      return {}
    }
  }
</script>
