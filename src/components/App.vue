<template>
<v-app>
    <v-navigation-drawer fixed :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" app>
        <v-list>
            <v-list-tile value="true" v-for="(item, i) in tabs" :key="i">
                <v-list-tile-action>
                    <v-icon v-html="item.icon"></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
        <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
            <v-icon>menu</v-icon>
        </v-btn>
    </v-toolbar>
    <v-content>
        <v-container fluid>

            <v-breadcrumbs>
                <v-icon slot="divider">chevron_right</v-icon>
                <v-breadcrumbs-item v-for="level in levels" :key="level.name" :disabled="level.disabled">
                    {{ level.name }}
                </v-breadcrumbs-item>
            </v-breadcrumbs>
            <File-List></File-List>
            <v-fab-transition>
              <v-btn
                color="pink"
                fab
                dark
                large
                fixed
                bottom
                right
                v-show="!hidden"
              >
                <v-icon>add</v-icon>
              </v-btn>
            </v-fab-transition>
        </v-container>
    </v-content>


    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed>
        <v-list>
            <v-list-tile @click.native="right = !right">
                <v-list-tile-action>
                    <v-icon>compare_arrows</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
        <span>Copyright &copy; 2017 OberonFrog All rights reserved</span>
    </v-footer>
</v-app>
</template>

<script>
import FileList from "./FileList.vue";

export default {
    data: () => {
        return {
            clipped: true,
            drawer: true,
            fixed: false,
            tabs: [{
                    icon: 'bubble_chart',
                    title: 'Super WhiteBoard'
                },
                {
                    icon: 'bubble_chart',
                    title: 'test'
                },
            ],
            levels: [{
                name: "Home",
                disabled: true
            }],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Discussion Support System'
        }
    },
    components: {
        'File-List': FileList
    }
}
</script>
