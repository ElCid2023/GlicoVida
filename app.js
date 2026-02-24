const recipes = [
    // CAFÉ DA MANHÃ (8 receitas)
    {id: 1, name: "Omelete de Espinafre e Cogumelos", type: "cafe", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400", carbs: 8, fiber: 3, calories: 220, glycemicIndex: "Baixo", ingredients: ["3 ovos", "1 xícara de espinafre", "100g cogumelos", "Azeite"], instructions: ["Refogue cogumelos e espinafre", "Bata os ovos", "Despeje na frigideira", "Cozinhe até firmar"], tip: "Rico em proteínas e fibras."},
    {id: 2, name: "Panqueca de Aveia e Banana", type: "cafe", image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400", carbs: 22, fiber: 4, calories: 200, glycemicIndex: "Médio", ingredients: ["1 banana", "2 ovos", "3 colheres aveia", "Canela"], instructions: ["Amasse a banana", "Misture ovos e aveia", "Frite em frigideira"], tip: "Banana madura adoça naturalmente."},
    {id: 3, name: "Tapioca com Queijo Branco", type: "cafe", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400", carbs: 18, fiber: 1, calories: 180, glycemicIndex: "Médio", ingredients: ["3 colheres goma tapioca", "50g queijo branco", "Orégano"], instructions: ["Aqueça frigideira", "Espalhe tapioca", "Adicione queijo", "Dobre e sirva"], tip: "Sem glúten e leve."},
    {id: 4, name: "Mingau de Aveia com Canela", type: "cafe", image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400", carbs: 25, fiber: 5, calories: 210, glycemicIndex: "Baixo", ingredients: ["1/2 xícara aveia", "1 xícara leite desnatado", "Canela", "Stevia"], instructions: ["Ferva o leite", "Adicione aveia", "Cozinhe 5 minutos", "Polvilhe canela"], tip: "Aveia controla glicemia."},
    {id: 5, name: "Ovos Mexidos com Tomate", type: "cafe", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400", carbs: 6, fiber: 2, calories: 190, glycemicIndex: "Baixo", ingredients: ["3 ovos", "1 tomate", "Cebola", "Azeite"], instructions: ["Refogue cebola e tomate", "Adicione ovos batidos", "Mexa até cozinhar"], tip: "Proteína de alta qualidade."},
    {id: 6, name: "Iogurte com Chia e Frutas Vermelhas", type: "cafe", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400", carbs: 20, fiber: 6, calories: 170, glycemicIndex: "Baixo", ingredients: ["1 pote iogurte natural", "1 colher chia", "1/2 xícara frutas vermelhas"], instructions: ["Misture chia no iogurte", "Deixe 10 minutos", "Adicione frutas"], tip: "Chia rica em ômega-3."},
    {id: 7, name: "Pão Integral com Abacate", type: "cafe", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400", carbs: 24, fiber: 7, calories: 250, glycemicIndex: "Baixo", ingredients: ["2 fatias pão integral", "1/2 abacate", "Limão", "Sal"], instructions: ["Amasse o abacate", "Tempere com limão", "Espalhe no pão"], tip: "Gorduras boas do abacate."},
    {id: 8, name: "Crepioca de Frango", type: "cafe", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400", carbs: 16, fiber: 2, calories: 240, glycemicIndex: "Médio", ingredients: ["1 ovo", "2 colheres tapioca", "Frango desfiado", "Tomate"], instructions: ["Bata ovo com tapioca", "Frite", "Recheie com frango"], tip: "Proteína e energia."},
    {id: 33, name: "Vitamina de Abacate", type: "cafe", image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400", carbs: 18, fiber: 6, calories: 210, glycemicIndex: "Baixo", ingredients: ["1/2 abacate", "Leite desnatado", "Stevia", "Gelo"], instructions: ["Bata tudo no liquidificador", "Sirva gelado"], tip: "Gorduras saudáveis."},
    
    // ALMOÇO (9 receitas)
    {id: 9, name: "Salada de Quinoa com Legumes", type: "almoco", image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400", carbs: 25, fiber: 6, calories: 280, glycemicIndex: "Baixo", ingredients: ["1 xícara quinoa", "Tomate", "Pepino", "Cebola roxa", "Limão"], instructions: ["Cozinhe quinoa", "Pique vegetais", "Misture tudo", "Tempere com limão"], tip: "Quinoa é proteína completa."},
    {id: 10, name: "Salmão com Aspargos", type: "almoco", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400", carbs: 6, fiber: 3, calories: 350, glycemicIndex: "Baixo", ingredients: ["1 filé salmão", "200g aspargos", "Limão", "Azeite"], instructions: ["Tempere salmão", "Asse 15 minutos", "Grelhe aspargos"], tip: "Ômega-3 controla glicemia."},
    {id: 11, name: "Peito de Frango com Legumes", type: "almoco", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400", carbs: 15, fiber: 4, calories: 310, glycemicIndex: "Baixo", ingredients: ["1 peito frango", "Brócolis", "Cenoura", "Abobrinha"], instructions: ["Grelhe o frango", "Cozinhe legumes no vapor", "Tempere com ervas"], tip: "Proteína magra ideal."},
    {id: 12, name: "Filé de Tilápia ao Forno", type: "almoco", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400", carbs: 8, fiber: 2, calories: 270, glycemicIndex: "Baixo", ingredients: ["2 filés tilápia", "Tomate", "Cebola", "Pimentão"], instructions: ["Tempere o peixe", "Cubra com vegetais", "Asse 20 minutos"], tip: "Peixe leve e nutritivo."},
    {id: 13, name: "Carne Moída com Berinjela", type: "almoco", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400", carbs: 12, fiber: 5, calories: 320, glycemicIndex: "Baixo", ingredients: ["300g carne moída", "1 berinjela", "Tomate", "Alho"], instructions: ["Refogue a carne", "Adicione berinjela picada", "Cozinhe com tomate"], tip: "Berinjela rica em fibras."},
    {id: 14, name: "Atum com Salada Verde", type: "almoco", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400", carbs: 10, fiber: 4, calories: 250, glycemicIndex: "Baixo", ingredients: ["1 lata atum", "Alface", "Rúcula", "Tomate cereja", "Azeite"], instructions: ["Monte a salada", "Adicione atum", "Tempere com azeite e limão"], tip: "Refeição rápida e saudável."},
    {id: 15, name: "Frango ao Curry com Couve-flor", type: "almoco", image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400", carbs: 14, fiber: 5, calories: 290, glycemicIndex: "Baixo", ingredients: ["Peito frango", "Couve-flor", "Curry", "Leite coco light"], instructions: ["Refogue frango com curry", "Adicione couve-flor", "Finalize com leite coco"], tip: "Curry acelera metabolismo."},
    {id: 16, name: "Omelete de Forno com Vegetais", type: "almoco", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400", carbs: 10, fiber: 3, calories: 260, glycemicIndex: "Baixo", ingredients: ["4 ovos", "Brócolis", "Tomate", "Queijo branco"], instructions: ["Bata ovos", "Adicione vegetais", "Asse 25 minutos"], tip: "Prático e nutritivo."},
    {id: 34, name: "Wrap Integral de Peru", type: "almoco", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400", carbs: 22, fiber: 5, calories: 290, glycemicIndex: "Baixo", ingredients: ["Tortilha integral", "Peito peru", "Alface", "Tomate"], instructions: ["Monte o wrap", "Enrole", "Corte ao meio"], tip: "Prático e saudável."},
    
    // JANTAR (9 receitas)
    {id: 17, name: "Frango Grelhado com Brócolis", type: "jantar", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400", carbs: 12, fiber: 5, calories: 320, glycemicIndex: "Baixo", ingredients: ["Peito frango", "Brócolis", "Alho", "Azeite"], instructions: ["Grelhe o frango", "Cozinhe brócolis no vapor", "Refogue com alho"], tip: "Jantar leve e completo."},
    {id: 18, name: "Sopa de Lentilha", type: "jantar", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", carbs: 28, fiber: 8, calories: 240, glycemicIndex: "Baixo", ingredients: ["1 xícara lentilha", "Cenoura", "Cebola", "Cominho"], instructions: ["Refogue cebola", "Adicione lentilha e água", "Cozinhe 30 minutos"], tip: "Lentilha rica em proteína."},
    {id: 19, name: "Peixe Assado com Ervas", type: "jantar", image: "https://images.unsplash.com/photo-1580959375944-0b7b9e7e6b3c?w=400", carbs: 5, fiber: 1, calories: 280, glycemicIndex: "Baixo", ingredients: ["Filé peixe branco", "Alecrim", "Tomilho", "Limão"], instructions: ["Tempere com ervas", "Regue com limão", "Asse 20 minutos"], tip: "Leve para o jantar."},
    {id: 20, name: "Sopa de Legumes", type: "jantar", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400", carbs: 18, fiber: 6, calories: 150, glycemicIndex: "Baixo", ingredients: ["Cenoura", "Abobrinha", "Chuchu", "Cebola"], instructions: ["Pique os legumes", "Cozinhe em água", "Tempere a gosto"], tip: "Hidratante e nutritiva."},
    {id: 21, name: "Berinjela Recheada", type: "jantar", image: "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?w=400", carbs: 16, fiber: 7, calories: 230, glycemicIndex: "Baixo", ingredients: ["2 berinjelas", "Carne moída", "Tomate", "Queijo"], instructions: ["Corte berinjela ao meio", "Recheie com carne", "Asse 30 minutos"], tip: "Fibras da berinjela."},
    {id: 22, name: "Frango Desfiado com Abóbora", type: "jantar", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400", carbs: 20, fiber: 4, calories: 270, glycemicIndex: "Baixo", ingredients: ["Peito frango", "Abóbora", "Cebola", "Alho"], instructions: ["Cozinhe e desfie frango", "Refogue com abóbora", "Tempere"], tip: "Abóbora rica em vitamina A."},
    {id: 23, name: "Omelete Light", type: "jantar", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400", carbs: 7, fiber: 2, calories: 200, glycemicIndex: "Baixo", ingredients: ["3 ovos", "Espinafre", "Tomate", "Cebola"], instructions: ["Refogue vegetais", "Adicione ovos", "Cozinhe"], tip: "Jantar rápido e leve."},
    {id: 24, name: "Caldo Verde", type: "jantar", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", carbs: 22, fiber: 5, calories: 210, glycemicIndex: "Baixo", ingredients: ["Couve", "Batata", "Linguiça light", "Alho"], instructions: ["Cozinhe batata", "Amasse", "Adicione couve e linguiça"], tip: "Clássico reconfortante."},
    {id: 35, name: "Strogonoff de Frango Light", type: "jantar", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400", carbs: 16, fiber: 3, calories: 280, glycemicIndex: "Baixo", ingredients: ["Frango", "Champignon", "Iogurte natural", "Mostarda"], instructions: ["Refogue frango", "Adicione cogumelos", "Finalize com iogurte"], tip: "Versão saudável."},
    
    // LANCHES (9 receitas)
    {id: 25, name: "Iogurte com Nozes e Canela", type: "lanche", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400", carbs: 15, fiber: 2, calories: 180, glycemicIndex: "Baixo", ingredients: ["Iogurte natural", "30g nozes", "Canela", "Stevia"], instructions: ["Coloque iogurte", "Adicione nozes", "Polvilhe canela"], tip: "Canela regula açúcar."},
    {id: 26, name: "Mix de Castanhas", type: "lanche", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400", carbs: 10, fiber: 3, calories: 200, glycemicIndex: "Baixo", ingredients: ["Amêndoas", "Castanhas", "Amendoins", "Nozes"], instructions: ["Separe porções", "Misture"], tip: "Controla fome."},
    {id: 27, name: "Palitos de Cenoura com Homus", type: "lanche", image: "https://images.unsplash.com/photo-1621336477702-1b71c8b6e0f1?w=400", carbs: 18, fiber: 5, calories: 150, glycemicIndex: "Baixo", ingredients: ["2 cenouras", "Grão-de-bico", "Tahine", "Limão"], instructions: ["Corte cenoura em palitos", "Bata grão-de-bico com tahine"], tip: "Fibras e proteína vegetal."},
    {id: 28, name: "Queijo Branco com Tomate", type: "lanche", image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400", carbs: 8, fiber: 1, calories: 120, glycemicIndex: "Baixo", ingredients: ["100g queijo branco", "Tomate cereja", "Orégano", "Azeite"], instructions: ["Corte queijo", "Adicione tomate", "Tempere"], tip: "Lanche rápido."},
    {id: 29, name: "Abacate com Cacau", type: "lanche", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400", carbs: 12, fiber: 7, calories: 190, glycemicIndex: "Baixo", ingredients: ["1/2 abacate", "1 colher cacau", "Stevia"], instructions: ["Amasse abacate", "Misture cacau", "Adoce"], tip: "Gorduras boas."},
    {id: 30, name: "Ovo Cozido", type: "lanche", image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400", carbs: 1, fiber: 0, calories: 70, glycemicIndex: "Baixo", ingredients: ["1 ovo"], instructions: ["Cozinhe 10 minutos", "Descasque"], tip: "Proteína pura."},
    {id: 31, name: "Smoothie Verde", type: "lanche", image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400", carbs: 16, fiber: 4, calories: 140, glycemicIndex: "Baixo", ingredients: ["Espinafre", "1/2 maçã verde", "Gengibre", "Água"], instructions: ["Bata tudo no liquidificador"], tip: "Refrescante e nutritivo."},
    {id: 32, name: "Chips de Abobrinha", type: "lanche", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400", carbs: 8, fiber: 3, calories: 90, glycemicIndex: "Baixo", ingredients: ["1 abobrinha", "Azeite", "Sal", "Páprica"], instructions: ["Corte abobrinha fina", "Tempere", "Asse até crocante"], tip: "Snack saudável."},
    {id: 36, name: "Pasta de Amendoim com Maçã", type: "lanche", image: "https://images.unsplash.com/photo-1568471173238-64ed8e7e9d6e?w=400", carbs: 14, fiber: 4, calories: 160, glycemicIndex: "Baixo", ingredients: ["1 maçã", "2 colheres pasta amendoim"], instructions: ["Corte maçã em fatias", "Passe pasta de amendoim"], tip: "Energia rápida."}
];

const exercises = [
    {id: 1, name: "Caminhada Leve", intensity: "leve", duration: 30, caloriesBurned: 120, image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400", demo: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/walking-benefits.png", steps: ["Mantenha postura ereta", "Balançe os braços naturalmente", "Passos em ritmo confortável", "Respire pelo nariz"]},
    {id: 2, name: "Yoga", intensity: "leve", duration: 30, caloriesBurned: 90, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400", demo: "https://www.verywellfit.com/thmb/yoga-poses.png", steps: ["Comece com respiração profunda", "Faça posturas básicas", "Mantenha cada posição 30s", "Relaxe entre posturas"]},
    {id: 3, name: "Alongamento", intensity: "leve", duration: 15, caloriesBurned: 40, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400", demo: "https://www.verywellfit.com/thmb/stretching-exercises.png", steps: ["Alongue cada músculo", "Segure por 20 segundos", "Não force demais", "Respire durante alongamento"]},
    {id: 4, name: "Caminhada Rápida", intensity: "moderado", duration: 40, caloriesBurned: 200, image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=400", demo: "https://www.verywellfit.com/thmb/power-walking.png", steps: ["Ritmo acelerado", "Balanço amplo dos braços", "Mantenha frequência cardíaca", "Hidrate-se"]},
    {id: 5, name: "Natação", intensity: "moderado", duration: 30, caloriesBurned: 250, image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400", demo: "https://www.verywellfit.com/thmb/swimming-strokes.png", steps: ["Nade em ritmo constante", "Varie os estilos", "Respire corretamente", "Descanse entre séries"]},
    {id: 6, name: "Ciclismo", intensity: "moderado", duration: 45, caloriesBurned: 300, image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400", demo: "https://www.verywellfit.com/thmb/cycling-posture.png", steps: ["Ajuste altura do selim", "Pedale em ritmo constante", "Mantenha postura", "Use capacete"]},
    {id: 7, name: "HIIT", intensity: "intenso", duration: 20, caloriesBurned: 300, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400", demo: "https://www.verywellfit.com/thmb/hiit-workout.png", steps: ["30s exercício intenso", "30s descanso", "Repita 10 vezes", "Dê máximo esforço"]},
    {id: 8, name: "Corrida", intensity: "intenso", duration: 30, caloriesBurned: 400, image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400", demo: "https://www.verywellfit.com/thmb/running-form.png", steps: ["Aquecimento 5 minutos", "Ritmo acelerado", "Controle respiração", "Alongue após"]},
    {id: 9, name: "CrossFit", intensity: "intenso", duration: 45, caloriesBurned: 500, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400", demo: "https://www.verywellfit.com/thmb/crossfit-movements.png", steps: ["Exercícios variados", "Alta intensidade", "Supervisão necessária", "Hidrate constantemente"]}
];

let filteredRecipes = [...recipes];
let filteredExercises = [...exercises];
let customPlate = [];

function renderRecipes(recipesToRender) {
    const container = document.getElementById('recipes');
    container.innerHTML = recipesToRender.map(recipe => `
        <div class="recipe-card" onclick="openModal(${recipe.id})">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-info">
                <span class="recipe-type">${getTypeLabel(recipe.type)}</span>
                <h3>${recipe.name}</h3>
                <div class="nutrition">
                    <div><strong>${recipe.carbs}g</strong><span>Carboidratos</span></div>
                    <div><strong>${recipe.fiber}g</strong><span>Fibras</span></div>
                    <div><strong>${recipe.calories}</strong><span>Calorias</span></div>
                </div>
            </div>
        </div>
    `).join('');
}

function getTypeLabel(type) {
    const labels = {cafe: 'Café da Manhã', almoco: 'Almoço', jantar: 'Jantar', lanche: 'Lanche'};
    return labels[type];
}

function openModal(id) {
    const recipe = recipes.find(r => r.id === id);
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${recipe.name}</h2>
        <span class="recipe-type">${getTypeLabel(recipe.type)}</span>
        <div class="nutrition" style="margin: 1rem 0;">
            <div><strong>${recipe.carbs}g</strong><span>Carboidratos</span></div>
            <div><strong>${recipe.fiber}g</strong><span>Fibras</span></div>
            <div><strong>${recipe.calories}</strong><span>Calorias</span></div>
        </div>
        <p><strong>Índice Glicêmico:</strong> ${recipe.glycemicIndex}</p>
        <div class="validation-badge">
            <span>✅ Validado por Nutricionista CRN 12345</span>
        </div>
        <h3>Ingredientes:</h3>
        <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
        <h3>Modo de Preparo:</h3>
        <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol>
        <div class="tip"><strong>💡 Dica:</strong> ${recipe.tip}</div>
        <button class="add-to-plate-btn" onclick="addToPlate(${recipe.id})">➕ Adicionar ao Meu Prato</button>
    `;
    modal.style.display = 'block';
}

function addToPlate(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!customPlate.find(r => r.id === id)) {
        customPlate.push(recipe);
        updateCustomPlate();
        alert(`${recipe.name} adicionado ao seu prato!`);
    } else {
        alert('Esta receita já está no seu prato!');
    }
}

function removeFromPlate(id) {
    customPlate = customPlate.filter(r => r.id !== id);
    updateCustomPlate();
}

function updateCustomPlate() {
    const container = document.getElementById('custom-plate-items');
    const totals = document.getElementById('plate-totals');
    
    if (customPlate.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#999;">Nenhum item adicionado ainda</p>';
        totals.innerHTML = '';
        return;
    }
    
    const totalCarbs = customPlate.reduce((sum, r) => sum + r.carbs, 0);
    const totalFiber = customPlate.reduce((sum, r) => sum + r.fiber, 0);
    const totalCalories = customPlate.reduce((sum, r) => sum + r.calories, 0);
    
    container.innerHTML = customPlate.map(recipe => `
        <div class="plate-item">
            <span>${recipe.name}</span>
            <button onclick="removeFromPlate(${recipe.id})" class="remove-btn">✖</button>
        </div>
    `).join('');
    
    totals.innerHTML = `
        <div class="nutrition">
            <div><strong>${totalCarbs}g</strong><span>Carboidratos</span></div>
            <div><strong>${totalFiber}g</strong><span>Fibras</span></div>
            <div><strong>${totalCalories}</strong><span>Calorias</span></div>
        </div>
    `;
}

function toggleCustomPlate() {
    const panel = document.getElementById('custom-plate');
    panel.classList.toggle('open');
}

function renderExercises(exercisesToRender) {
    const container = document.getElementById('exercises');
    container.innerHTML = exercisesToRender.map(ex => `
        <div class="recipe-card" onclick="openExerciseModal(${ex.id})">
            <img src="${ex.image}" alt="${ex.name}">
            <div class="recipe-info">
                <span class="recipe-type" style="background: ${ex.intensity === 'leve' ? '#4CAF50' : ex.intensity === 'moderado' ? '#FF9800' : '#F44336'}">${ex.intensity.toUpperCase()}</span>
                <h3>${ex.name}</h3>
                <div class="nutrition">
                    <div><strong>${ex.duration}min</strong><span>Duração</span></div>
                    <div><strong>${ex.caloriesBurned}</strong><span>Calorias</span></div>
                </div>
            </div>
        </div>
    `).join('');
}

function openExerciseModal(id) {
    const exercise = exercises.find(e => e.id === id);
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${exercise.name}</h2>
        <span class="recipe-type" style="background: ${exercise.intensity === 'leve' ? '#4CAF50' : exercise.intensity === 'moderado' ? '#FF9800' : '#F44336'}">${exercise.intensity.toUpperCase()}</span>
        
        <div class="nutrition" style="margin: 1rem 0;">
            <div><strong>${exercise.duration}min</strong><span>Duração</span></div>
            <div><strong>${exercise.caloriesBurned}</strong><span>Calorias</span></div>
        </div>
        
        <div class="validation-badge">
            <span>✅ Validado por Prof. Educação Física CREF 67890</span>
        </div>
        
        <h3>📝 Passo a Passo:</h3>
        <ol>${exercise.steps.map(step => `<li>${step}</li>`).join('')}</ol>
        
        <div class="warning"><strong>⚠️ Atenção:</strong> Consulte seu médico antes de iniciar qualquer atividade física</div>
    `;
    modal.style.display = 'block';
}

function filterExercises() {
    const searchTerm = document.getElementById('searchExercise').value.toLowerCase();
    const intensityFilter = document.getElementById('filterIntensity').value;
    filteredExercises = exercises.filter(exercise => {
        const matchesSearch = exercise.name.toLowerCase().includes(searchTerm);
        const matchesIntensity = intensityFilter === 'all' || exercise.intensity === intensityFilter;
        return matchesSearch && matchesIntensity;
    });
    renderExercises(filteredExercises);
}

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    if (tab === 'exercises-tab') {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('exercises-tab').classList.add('active');
        renderExercises(exercises);
    } else {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('recipes-tab').classList.add('active');
    }
}

function getAnimationClass(id) {
    const animations = {
        1: 'walk-animation',
        2: 'yoga-animation',
        3: 'stretch-animation',
        4: 'walk-animation',
        5: 'walk-animation',
        6: 'walk-animation',
        7: 'hiit-animation',
        8: 'run-animation',
        9: 'hiit-animation'
    };
    return animations[id] || 'walk-animation';
}

document.querySelector('.close').onclick = () => document.getElementById('modal').style.display = 'none';
window.onclick = (e) => { if (e.target == document.getElementById('modal')) document.getElementById('modal').style.display = 'none'; }
document.getElementById('search').addEventListener('input', filterRecipes);
document.getElementById('filterType').addEventListener('change', filterRecipes);

function filterRecipes() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const typeFilter = document.getElementById('filterType').value;
    filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.name.toLowerCase().includes(searchTerm) || recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm));
        const matchesType = typeFilter === 'all' || recipe.type === typeFilter;
        return matchesSearch && matchesType;
    });
    renderRecipes(filteredRecipes);
}

renderRecipes(recipes);
