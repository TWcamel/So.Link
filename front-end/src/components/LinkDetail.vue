<template>
  <b-card class="mb-2" >
    <b-row>
      <b-col cols="12" sm="7">
        <b-input-group prepend="Short URL" style="place-content: center;" class="mt-1">
          <b-form-input type="text" v-model="link.short_link" />
          <b-input-group-append>
            <b-button
              variant="outline-primary"
              @click.prevent="copyText(1)"
              v-b-tooltip.hover
              :title="messages"
            >
              <b-icon-clipboard />
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <b-input-group prepend="Long URL" style="place-content: center;" class="mt-1">
          <b-form-input type="text" v-model="link.long_link" />
          <b-input-group-append>
            <b-button
              variant="outline-primary"
              @click.prevent="copyText(2)"
              v-b-tooltip.hover
              :title="messages"
            >
              <b-icon-clipboard />
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <b-col cols="12" sm="4" style="text-align: left;">
        <b-input-group style="place-content: center;" class="mt-1">
          <b-form-input
            type="text"
            :placeholder="'點擊次數: ' + link.click_number"
            style="border: none; cursor: default; pointer-events: none;"
          />
        </b-input-group>
        <b-input-group style="place-content: center;" class="mt-1">
          <b-form-input
            type="text"
            :placeholder="'創立時間: ' + link.register_time.toLocaleString()"
            style="border: none; cursor: default; pointer-events: none;"
          />
        </b-input-group>
      </b-col>
      <b-col cols="12" sm="1" style="align-self: center" class="mt-4 mb-4">
        <b-button
          variant="outline-warn"
          v-b-tooltip.hover
          @click="deleteLink()"
          title="刪除這條短連結"
          id="removeLinksBtn"
        >
          <b-icon icon="x-circle" scale="2" variant="danger" />
        </b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import linkService from "@/services/linkService";

export default {
  props: ["link", "messages"],
  data() {
    return {};
  },
  methods: {
    copyText(val) {
      if (val === 1) {
        this.$copyText(this.link.short_link).then(
          (ele) => {
            console.log(this.link);
            this.$awn.success(`📎 ${ele.text}`);
          },
          (ele) => {
            this.$awn.alert(`Fail to copy`);
            console.log(ele);
          }
        );
      } else if (val === 2) {
        this.$copyText(this.link.long_link).then(
          (ele) => {
            this.$awn.success(`📎 ${ele.text}`);
          },
          (ele) => {
            this.$awn.alert(`Fail to copy`);
            console.log(ele);
          }
        );
      }
    },
    async deleteLink() {
      const shortHash = this.link.short_link.split("/")[
        this.link.short_link.split("/").length - 1
      ];
      if (shortHash) {
        const removeComponent = this.$emit("on-result-change", this.title)
          ._vnode.tag;
        if (removeComponent === "div") {
          await linkService.deleteLink(shortHash);
          this.$awn.success(`${this.link.short_link} 已移除`);
        }
      }
    },
  },
};
</script>

<style>
</style>