<script>
  import field from '@/components/field/';
  import fieldGroup from '@/components/field-group/';
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
