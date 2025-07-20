// Main Component
const LearnAILDToolFinder = () => {
  const [currentNode, setCurrentNode] = React.useState('start');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [history, setHistory] = React.useState([]);
  const [savedTools, setSavedTools] = React.useState([]);

  const currentData = educationalToolNodes[currentNode] || { 
    title: "Page Not Found", 
    description: "This section is under development.", 
    options: [{ text: "🏠 Back to Main Menu", node: "start" }] 
  };

  const navigate = (node) => {
    setHistory([...history, currentNode]);
    setCurrentNode(node);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (history.length > 0) {
      const previousNode = history[history.length - 1];
      setCurrentNode(previousNode);
      setHistory(history.slice(0, -1));
      setSearchQuery('');
    }
  };

  const resetNavigation = () => {
    setCurrentNode('start');
    setHistory([]);
    setSearchQuery('');
  };

  const saveTool = (tool) => {
    if (!savedTools.find(saved => saved.name === tool.name)) {
      setSavedTools([...savedTools, tool]);
    }
  };

  const removeTool = (toolName) => {
    setSavedTools(savedTools.filter(tool => tool.name !== toolName));
  };

  const filteredTools = currentData.tools ? currentData.tools.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.tasks?.some(task => task.toLowerCase().includes(searchQuery.toLowerCase()))
  ) : [];

  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'div',
      { className: 'content-box' },
      React.createElement(
        'div',
        { className: 'header' },
        React.createElement(
          'div',
          { className: 'logo-section' },
          React.createElement(
            'div',
            { className: 'brain-icon' },
            '🧠'
          ),
          React.createElement(
            'div',
            null,
            React.createElement('h1', { className: 'title' }, 'Learn AI LD'),
            React.createElement('div', { className: 'subtitle' }, 'Educational AI Tool Finder'),
            React.createElement('div', { className: 'tagline' }, 'AI-Assisted, Human-Driven')
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'main-card' },
        React.createElement(
          'div',
          { className: 'nav-controls' },
          React.createElement(
            'h2',
            { className: 'card-title', style: { margin: 0, textAlign: 'left', flex: 1 } },
            currentData.title
          ),
          React.createElement(
            'div',
            { style: { display: 'flex', gap: '15px' } },
            React.createElement(
              'button',
              { 
                onClick: resetNavigation,
                className: 'back-button'
              },
              '🏠 Home'
            ),
            history.length > 0 && React.createElement(
              'button',
              { 
                onClick: goBack,
                className: 'back-button'
              },
              '← Back'
            )
          )
        ),
        currentData.description && React.createElement(
          'p',
          { className: 'card-description' },
          currentData.description
        ),
        currentData.options && currentData.options.length > 0 && !currentData.tools && React.createElement(
          'div',
          { className: 'button-grid' },
          currentData.options.map((option, idx) => 
            React.createElement(
              'button',
              { 
                key: idx,
                className: 'glow-button',
                onClick: () => navigate(option.node)
              },
              React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
                React.createElement('span', { style: { fontSize: '1.5rem' } }, option.icon || '📚'),
                React.createElement('span', null, option.text)
              )
            )
          )
        ),
        currentData.tools && React.createElement(
          React.Fragment,
          null,
          React.createElement(
            'div',
            null,
            React.createElement('input', {
              type: 'text',
              placeholder: 'Search tools by name, description, or educational task...',
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: 'search-input'
            })
          ),
          React.createElement(
            'div',
            null,
            filteredTools.map((tool, idx) => 
              React.createElement(
                'div',
                { key: idx, className: 'tool-card' },
                React.createElement('div', { className: 'category-badge' }, tool.category),
                React.createElement('h3', { className: 'tool-title' }, tool.name),
                React.createElement('p', { className: 'tool-description' }, tool.description),
                tool.tasks && React.createElement(
                  'div',
                  { style: { marginBottom: '20px' } },
                  React.createElement(
                    'strong',
                    { style: { color: '#667eea', fontSize: '0.95rem', fontWeight: '600' } },
                    'Perfect for: '
                  ),
                  React.createElement(
                    'div',
                    { 
                      style: { 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '8px', 
                        marginTop: '8px' 
                      } 
                    },
                    tool.tasks.map((task, taskIdx) => 
                      React.createElement(
                        'span',
                        {
                          key: taskIdx,
                          style: {
                            background: 'rgba(102, 126, 234, 0.1)',
                            color: '#475569',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            fontSize: '0.85rem',
                            fontWeight: '500'
                          }
                        },
                        task
                      )
                    )
                  )
                ),
                React.createElement(
                  'div',
                  { 
                    style: { 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      flexWrap: 'wrap', 
                      gap: '15px' 
                    } 
                  },
                  React.createElement(
                    'a',
                    { 
                      href: tool.link,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: 'tool-link'
                    },
                    '🔗 Visit Tool'
                  ),
                  React.createElement(
                    'button',
                    { 
                      onClick: () => saveTool(tool),
                      className: 'nav-button',
                      style: { margin: 0, fontSize: '0.9rem' },
                      disabled: savedTools.find(saved => saved.name === tool.name)
                    },
                    savedTools.find(saved => saved.name === tool.name) ? '✓ Saved' : '💾 Save Tool'
                  )
                )
              )
            ),
            filteredTools.length === 0 && searchQuery && React.createElement(
              'div',
              { 
                style: { 
                  textAlign: 'center', 
                  padding: '60px 20px',
                  background: 'rgba(102, 126, 234, 0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(102, 126, 234, 0.1)'
                } 
              },
              React.createElement('div', { style: { fontSize: '3rem', marginBottom: '20px' } }, '🔍'),
              React.createElement(
                'h3',
                { 
                  style: { 
                    color: '#1E293B', 
                    fontSize: '1.3rem', 
                    marginBottom: '10px',
                    fontWeight: '600'
                  } 
                },
                `No tools found matching "${searchQuery}"`
              ),
              React.createElement(
                'p',
                { style: { color: '#64748B', fontSize: '1rem' } },
                'Try different keywords or browse our categories above'
              )
            )
          ),
          currentData.options && currentData.tools && React.createElement(
            'div',
            { className: 'bottom-nav' },
            currentData.options.map((option, idx) => 
              React.createElement(
                'button',
                {
                  key: idx,
                  onClick: () => navigate(option.node),
                  className: 'nav-button'
                },
                option.text
              )
            )
          )
        )
      ),
      savedTools.length > 0 && React.createElement(
        'div',
        { className: 'saved-tools-section' },
        React.createElement(
          'h3',
          { className: 'saved-tools-title' },
          `🎯 Your Personalized AI Toolkit (${savedTools.length} tools)`
        ),
        React.createElement(
          'div',
          null,
          savedTools.map((tool, idx) => 
            React.createElement(
              'div',
              { key: idx, className: 'saved-tool-item' },
              React.createElement(
                'div',
                null,
                React.createElement(
                  'div',
                  { 
                    style: { 
                      fontWeight: '700', 
                      color: '#1E293B', 
                      fontSize: '1.1rem',
                      marginBottom: '4px'
                    } 
                  },
                  tool.name
                ),
                React.createElement(
                  'div',
                  { 
                    style: { 
                      color: '#64748B', 
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    } 
                  },
                  React.createElement(
                    'span',
                    { 
                      style: { 
                        background: 'rgba(102, 126, 234, 0.1)',
                        padding: '2px 8px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      } 
                    },
                    tool.category
                  ),
                  ' • ',
                  tool.tasks?.[0] || 'Multi-purpose tool'
                )
              ),
              React.createElement(
                'div',
                { style: { display: 'flex', gap: '12px' } },
                React.createElement(
                  'a',
                  { 
                    href: tool.link,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'tool-link',
                    style: { padding: '8px 16px', fontSize: '0.85rem' }
                  },
                  'Open'
                ),
                React.createElement(
                  'button',
                  { 
                    onClick: () => removeTool(tool.name),
                    className: 'remove-button'
                  },
                  'Remove'
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { 
            style: { 
              marginTop: '25px', 
              textAlign: 'center',
              color: '#64748B',
              fontSize: '0.95rem',
              fontStyle: 'italic'
            } 
          },
          '💡 Save tools as you explore to build your personalized educational AI toolkit!'
        )
      ),
      React.createElement(
        'div',
        { className: 'help-section' },
        React.createElement('h4', { className: 'help-title' }, '🚀 Ready to Transform Your Teaching?'),
        React.createElement(
          'div',
          { className: 'help-content' },
          'This tool helps you discover AI solutions tailored for educational excellence. Each recommendation is curated based on real-world educational applications and proven effectiveness.',
          React.createElement('br'),
          React.createElement('br'),
          React.createElement('strong', { style: { color: '#667eea' } }, 'Pro Tip:'),
          ' Most successful educators combine 2-3 AI tools to create a comprehensive workflow that covers content creation, assessment, and student engagement!'
        )
      )
    )
  );
};

// App component
const App = () => {
  return React.createElement(LearnAILDToolFinder);
};

// Render the App to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
