<template>
    <vs-row>
        <vs-button
            radius
            icon="delete_forever"
            color="danger"
            type="gradient"
            @click="handleClick()"
        />
        <modal-window
            :visible="showModal"
            :close-on-escape="true"
            :close-on-outside-click="true"
            :show-x-mark="true"
            @close="showModal = false"
        >
            <h2>Modal window</h2>
            <p>Here be content</p>
        </modal-window>
    </vs-row>
</template>

<script>
export default {
    data() {
        return { showModal: false }
    },
    methods: {
        handleClick() {
            this.$emit('showModal')
        },
    },
}
</script>
