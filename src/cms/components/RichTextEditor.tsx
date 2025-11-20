import { useRef, useState, useEffect } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Link as LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Code
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export function RichTextEditor({ 
  value, 
  onChange, 
  placeholder = 'Saisissez votre texte ici...',
  minHeight = '200px'
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const isUserTypingRef = useRef(false);

  // Synchroniser le contenu de l'éditeur avec la valeur externe
  // Uniquement si le changement ne provient pas de l'utilisateur
  useEffect(() => {
    if (editorRef.current && !isUserTypingRef.current) {
      const currentContent = editorRef.current.innerHTML;
      const newContent = value || '';
      
      // Normaliser les contenus pour éviter les faux positifs
      const normalizedCurrent = currentContent.replace(/<br\s*\/?>/gi, '').trim();
      const normalizedNew = newContent.replace(/<br\s*\/?>/gi, '').trim();
      
      if (normalizedCurrent !== normalizedNew) {
        editorRef.current.innerHTML = newContent;
      }
    }
    // Reset le flag après la synchronisation
    isUserTypingRef.current = false;
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      isUserTypingRef.current = true;
      onChange(editorRef.current.innerHTML);
    }
  };

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput();
  };

  const addLink = () => {
    const url = prompt('Entrez l\'URL du lien:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const addTable = () => {
    const rows = prompt('Nombre de lignes:', '3');
    const cols = prompt('Nombre de colonnes:', '3');
    
    if (rows && cols) {
      let tableHTML = '<table style="border-collapse: collapse; width: 100%; margin: 10px 0;">';
      tableHTML += '<thead>';
      for (let i = 0; i < parseInt(cols); i++) {
        tableHTML += '<th style="border: 1px solid #d1d5db; padding: 8px; background-color: #f9fafb; font-weight: 600;">En-tête ' + (i + 1) + '</th>';
      }
      tableHTML += '</thead><tbody>';
      for (let i = 0; i < parseInt(rows); i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < parseInt(cols); j++) {
          tableHTML += '<td style="border: 1px solid #d1d5db; padding: 8px;">Cellule</td>';
        }
        tableHTML += '</tr>';
      }
      tableHTML += '</tbody></table><p><br></p>';
      
      document.execCommand('insertHTML', false, tableHTML);
      handleInput();
    }
  };

  const ToolbarButton = ({ 
    onClick, 
    icon: Icon, 
    title 
  }: { 
    onClick: () => void; 
    icon: any; 
    title: string;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className="p-2 hover:bg-gray-100 transition-colors border-r border-gray-200 last:border-r-0"
      title={title}
    >
      <Icon className="w-4 h-4 text-gray-700" />
    </button>
  );

  return (
    <div className="rich-text-editor border border-gray-300" style={{ minHeight }}>
      {/* Toolbar */}
      <div className="flex items-center bg-gray-50 border-b border-gray-200 flex-wrap">
        <ToolbarButton 
          onClick={() => execCommand('bold')} 
          icon={Bold} 
          title="Gras (Ctrl+B)" 
        />
        <ToolbarButton 
          onClick={() => execCommand('italic')} 
          icon={Italic} 
          title="Italique (Ctrl+I)" 
        />
        <ToolbarButton 
          onClick={() => execCommand('underline')} 
          icon={Underline} 
          title="Souligné (Ctrl+U)" 
        />
        
        <div className="border-r-2 border-gray-300 h-6 mx-1" />
        
        <ToolbarButton 
          onClick={() => execCommand('insertUnorderedList')} 
          icon={List} 
          title="Liste à puces" 
        />
        <ToolbarButton 
          onClick={() => execCommand('insertOrderedList')} 
          icon={ListOrdered} 
          title="Liste numérotée" 
        />
        
        <div className="border-r-2 border-gray-300 h-6 mx-1" />
        
        <ToolbarButton 
          onClick={() => execCommand('justifyLeft')} 
          icon={AlignLeft} 
          title="Aligner à gauche" 
        />
        <ToolbarButton 
          onClick={() => execCommand('justifyCenter')} 
          icon={AlignCenter} 
          title="Centrer" 
        />
        <ToolbarButton 
          onClick={() => execCommand('justifyRight')} 
          icon={AlignRight} 
          title="Aligner à droite" 
        />
        
        <div className="border-r-2 border-gray-300 h-6 mx-1" />
        
        <ToolbarButton 
          onClick={addLink} 
          icon={LinkIcon} 
          title="Insérer un lien" 
        />
        
        <div className="border-r-2 border-gray-300 h-6 mx-1" />
        
        {/* Headings */}
        <select
          onChange={(e) => {
            if (e.target.value) {
              execCommand('formatBlock', e.target.value);
              e.target.value = '';
            }
          }}
          className="px-2 py-1 text-sm border-r border-gray-200 bg-transparent focus:outline-none"
          defaultValue=""
        >
          <option value="">Style</option>
          <option value="h1">Titre 1</option>
          <option value="h2">Titre 2</option>
          <option value="h3">Titre 3</option>
          <option value="h4">Titre 4</option>
          <option value="p">Paragraphe</option>
        </select>
        
        {/* Font Family */}
        <select
          onChange={(e) => {
            if (e.target.value) {
              execCommand('fontName', e.target.value);
              e.target.value = '';
            }
          }}
          className="px-2 py-1 text-sm border-r border-gray-200 bg-transparent focus:outline-none"
          defaultValue=""
        >
          <option value="">Police</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
          <option value="Courier New">Courier New</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
        </select>
        
        {/* Font Size */}
        <select
          onChange={(e) => {
            if (e.target.value) {
              execCommand('fontSize', e.target.value);
              e.target.value = '';
            }
          }}
          className="px-2 py-1 text-sm border-r border-gray-200 bg-transparent focus:outline-none"
          defaultValue=""
        >
          <option value="">Taille</option>
          <option value="1">Très petit</option>
          <option value="2">Petit</option>
          <option value="3">Normal</option>
          <option value="4">Moyen</option>
          <option value="5">Grand</option>
          <option value="6">Très grand</option>
          <option value="7">Énorme</option>
        </select>
        
        <button
          type="button"
          onClick={addTable}
          className="px-3 py-1 text-sm hover:bg-gray-100 transition-colors border-r border-gray-200"
          title="Insérer un tableau"
        >
          📊 Tableau
        </button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="p-4 focus:outline-none overflow-auto"
        style={{ 
          minHeight: `calc(${minHeight} - 42px)`,
          maxHeight: '500px'
        }}
        data-placeholder={placeholder}
      />

      <style>{`
        .rich-text-editor [contentEditable]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
          display: block;
        }
        
        .rich-text-editor [contentEditable] {
          font-size: 14px;
          line-height: 1.6;
        }
        
        .rich-text-editor [contentEditable]:focus {
          outline: none;
        }
        
        .rich-text-editor [contentEditable] h1 {
          font-size: 2em;
          font-weight: 700;
          margin: 0.5em 0;
        }
        
        .rich-text-editor [contentEditable] h2 {
          font-size: 1.5em;
          font-weight: 700;
          margin: 0.5em 0;
        }
        
        .rich-text-editor [contentEditable] h3 {
          font-size: 1.25em;
          font-weight: 700;
          margin: 0.5em 0;
        }
        
        .rich-text-editor [contentEditable] h4 {
          font-size: 1.1em;
          font-weight: 700;
          margin: 0.5em 0;
        }
        
        .rich-text-editor [contentEditable] p {
          margin: 0.5em 0;
        }
        
        .rich-text-editor [contentEditable] ul,
        .rich-text-editor [contentEditable] ol {
          margin: 0.5em 0;
          padding-left: 2em;
        }
        
        .rich-text-editor [contentEditable] li {
          margin: 0.25em 0;
        }
        
        .rich-text-editor [contentEditable] a {
          color: #B5C233;
          text-decoration: underline;
        }
        
        .rich-text-editor [contentEditable] table {
          border-collapse: collapse;
          width: 100%;
          margin: 10px 0;
        }
        
        .rich-text-editor [contentEditable] table td,
        .rich-text-editor [contentEditable] table th {
          border: 1px solid #d1d5db;
          padding: 8px;
        }
        
        .rich-text-editor [contentEditable] table th {
          background-color: #f9fafb;
          font-weight: 600;
        }
        
        .rich-text-editor [contentEditable] strong {
          font-weight: 700;
        }
        
        .rich-text-editor [contentEditable] em {
          font-style: italic;
        }
        
        .rich-text-editor [contentEditable] u {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}