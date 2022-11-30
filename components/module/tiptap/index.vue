<script setup lang="ts">
import Highlight from '@tiptap/extension-highlight'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Typography from '@tiptap/extension-typography'
import TextAlign from '@tiptap/extension-text-align'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import { StarterKit } from '@tiptap/starter-kit'
const props = withDefaults(
  defineProps<{
    modelValue: string
  }>(),
  {
    modelValue: ''
  }
)
const emit = defineEmits<{
  (e: 'update:model-value', value: any): void
}>()
const editor = useEditor({
  content: props.modelValue || '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [
    StarterKit,
    Highlight,
    Heading.configure({
      HTMLAttributes: {
        class: 'text-h6'
      }
    }),
    Paragraph.configure({
      HTMLAttributes: {
        class: 'text-subtitle-1'
      }
    }),
    Typography,
    TextAlign.configure({
      types: ['heading', 'paragraph']
    })
  ],
  onUpdate: () => {
    emit('update:model-value', editor.value?.getHTML())
  }
})
watch(props, (v, c) => {
  console.log(c.modelValue)
  if (editor.value?.getHTML() === c.modelValue) return
  editor.value?.commands.setContent(c.modelValue, false)
})
onBeforeUnmount(() => {
  editor.value?.destroy()
})
const icons = [
  {
    icon: 'mdi-format-bold',
    func: () => editor.value?.chain().focus().toggleBold().run(),
    disabled: () => editor.value?.isActive('bold') || false
  },
  {
    icon: 'mdi-format-italic',
    func: () => editor.value?.chain().focus().toggleItalic().run(),
    disabled: () => editor.value?.isActive('italic') || false
  },
  {
    icon: 'mdi-format-strikethrough',
    func: () => editor.value?.chain().focus().toggleStrike().run(),
    disabled: () => editor.value?.isActive('strike') || false
  },
  {
    icon: 'mdi-code-tags',
    func: () => editor.value?.chain().focus().toggleCode().run(),
    disabled: () => editor.value?.isActive('code') || false
  },
  {
    icon: 'mdi-format-paragraph',
    func: () => editor.value?.chain().focus().setParagraph().run(),
    disabled: () => editor.value?.isActive('paragraph') || false
  },
  {
    icon: 'mdi-format-header-1',
    func: () => editor.value?.chain().focus().toggleHeading({ level: 1 }).run(),
    disabled: () => editor.value?.isActive('heading', { level: 1 }) || false
  },
  {
    icon: 'mdi-format-header-2',
    func: () => editor.value?.chain().focus().toggleHeading({ level: 2 }).run(),
    disabled: () => editor.value?.isActive('heading', { level: 2 }) || false
  },
  {
    icon: 'mdi-format-header-3',
    func: () => editor.value?.chain().focus().toggleHeading({ level: 3 }).run(),
    disabled: () => editor.value?.isActive('heading', { level: 3 }) || false
  },
  {
    icon: 'mdi-format-header-4',
    func: () => editor.value?.chain().focus().toggleHeading({ level: 4 }).run(),
    disabled: () => editor.value?.isActive('heading', { level: 4 }) || false
  },
  {
    icon: 'mdi-format-header-5',
    func: () => editor.value?.chain().focus().toggleHeading({ level: 5 }).run(),
    disabled: () => editor.value?.isActive('heading', { level: 5 }) || false
  },
  {
    icon: 'mdi-format-header-6',
    func: () => editor.value?.chain().focus().toggleHeading({ level: 6 }).run(),
    disabled: () => editor.value?.isActive('heading', { level: 6 }) || false
  },
  {
    icon: 'mdi-format-list-bulleted',
    func: () => editor.value?.chain().focus().toggleBulletList().run(),
    disabled: () => editor.value?.isActive('bulletList') || false
  },
  {
    icon: 'mdi-format-list-numbered',
    func: () => editor.value?.chain().focus().toggleOrderedList().run(),
    disabled: () => editor.value?.isActive('orderedList') || false
  },
  {
    icon: 'mdi-format-align-left',
    func: () => editor.value?.chain().focus().setTextAlign('left').run(),
    disabled: () => editor.value?.isActive({ textAlign: 'left' }) || false
  },
  {
    icon: 'mdi-format-align-center',
    func: () => editor.value?.chain().focus().setTextAlign('center').run(),
    disabled: () => editor.value?.isActive({ textAlign: 'center' }) || false
  },
  {
    icon: 'mdi-format-align-right',
    func: () => editor.value?.chain().focus().setTextAlign('right').run(),
    disabled: () => editor.value?.isActive({ textAlign: 'right' }) || false
  },
  {
    icon: 'mdi-format-align-justify',
    func: () => editor.value?.chain().focus().setTextAlign('justify').run(),
    disabled: () => editor.value?.isActive({ textAlign: 'justify' }) || false
  },
  {
    icon: 'mdi-xml',
    func: () => editor.value?.chain().focus().toggleCodeBlock().run(),
    disabled: () => editor.value?.isActive('codeBlock') || false
  },
  {
    icon: 'mdi-format-quote-open',
    func: () => editor.value?.chain().focus().toggleBlockquote().run(),
    disabled: () => editor.value?.isActive('blockquote') || false
  },
  {
    icon: 'mdi-minus',
    func: () => editor.value?.chain().focus().setHorizontalRule().run(),
    disabled: () => false
  },
  {
    icon: 'mdi-keyboard-return',
    func: () => editor.value?.chain().focus().setHardBreak().run(),
    disabled: () => false
  },
  {
    icon: 'mdi-arrow-u-left-top',
    func: () => editor.value?.chain().focus().undo().run(),
    disabled: () => !editor.value?.can().chain().focus().undo().run() || false
  },
  {
    icon: 'mdi-arrow-u-right-top',
    func: () => editor.value?.chain().focus().redo().run(),
    disabled: () => !editor.value?.can().chain().focus().redo().run() || false
  }
]
</script>
<template>
  <div
    v-if="editor"
    class="border-solid border-width-1 border-grey-darken-4 w-100 rounded"
  >
    <div class="d-flex flex-wrap ma-1">
      <module-tiptap-icon
        v-for="item in icons"
        :key="item.icon"
        :icon="item.icon"
        class="mr-1"
        :disabled="item.disabled"
        @click-func="item.func()"
      />
    </div>
    <v-divider class="bg-grey-darken-4"></v-divider>
    <editor-content :editor="editor" class="py-5 px-2" />
  </div>
</template>
