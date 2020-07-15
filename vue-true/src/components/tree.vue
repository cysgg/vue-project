<!-- src/components/tree/tree.vue -->
<template>
    <div>
        <tree-node
            v-for="(item, index) in cloneData"
            :key="index"
            :data="item"
            :show-checkbox="showCheckbox"
        ></tree-node>
    </div>
</template>
<script>
import TreeNode from './node.vue'
import { deepCopy } from '../utils'

export default {
    name: 'Tree',
    components: { TreeNode },
    props: {
        data: {
            type: Array,
            default() {
                return []
            }
        },
        showCheckbox: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            cloneData: []
        }
    },
    created() {
        this.rebuildData()
    },
    watch: {
        data() {
            this.rebuildData()
        }
    },
    methods: {
        rebuildData() {
            this.cloneData = deepCopy(this.data)
        }
    }
}
</script>
