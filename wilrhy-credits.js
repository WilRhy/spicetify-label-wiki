(async function WilRhyCreditsExt() {
    // Wait for core Spicetify APIs
    while (!Spicetify?.showNotification || !Spicetify?.PopupModal || !Spicetify?.Platform?.History || !Spicetify?.Menu || !Spicetify?.ContextMenu) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    const GITHUB_USER = "WilRhy"; 
    const REPO_NAME = "spicetify-label-wiki"; 
    const CURRENT_VERSION = "1.0.0"; 

    // --- BASE & HARDCODED LABELS ---
    const hardcodedLabels = {
        "paper vinyl records": {
            name: "Paper Vinyl Records",
            logo_url: "https://raw.githubusercontent.com/PaperVinylRecords/papervinylrecords.github.io/refs/heads/main/images%20/pvrtransparent.png",
            description: "Paper Vinyl Records is an independent record label founded by WilRhy. Dedicated to supporting small artists with independent music creation.",
            founder: "WilRhy",
            founded: "2024",
            links: [{ title: "Official Website", url: "https://papervinylmusic.com/" }],
            artists: [
                { name: "WilRhy", id: "1b29I5ZHtYsY0QF2NDxAai", img: "https://i.scdn.co/image/ab6761610000e5eb5a8439f67690f0c6183e8788" },
                { name: "Frostability", id: "6Pnqtln6eh4XN3dOTz82h0", img: "https://i.scdn.co/image/ab6761610000e5eb5a8439f67690f0c6183e8788" },
                { name: "TwistedAnimations", id: "0lvJH8oBsZd5XqF0ETI3TD", img: "https://i.scdn.co/image/ab6761610000e5eb5a8439f67690f0c6183e8788" },
                { name: "BadMicGames", id: "0gS5djNJMApgW18oBp2qJq", img: "https://i.scdn.co/image/ab6761610000e5eb5a8439f67690f0c6183e8788" },
                { name: "SmiteBite", id: "3MtWr4iE63OiCIuLnr7fqV", img: "https://i.scdn.co/image/ab6761610000e5eb5a8439f67690f0c6183e8788" },
                { name: "judeUK", id: "0utz4ve1gR4hJRwzwAlKsG", img: "https://i.scdn.co/image/ab6761610000e5eb5a8439f67690f0c6183e8788" }
            ]
        },
        "columbia records": {
            name: "Columbia Records",
            logo_url: "https://raw.githubusercontent.com/WilRhy/raw-image-links/refs/heads/main/columbia.png",
            description: "Columbia Records is an American record label owned by Sony Music Entertainment. Founded in 1889, it is the oldest surviving brand name in the recorded sound business.",
            founder: "Edward Easton",
            founded: "1889",
            links: [{ title: "Official Website", url: "https://www.columbiarecords.com/" }],
            artists: [
                { name: "Adele", id: "4dpARuHxo51G3z768sgnrY", img: "https://i.scdn.co/image/ab6761610000e5eb7357492cfa419f86439ae7f7" },
                { name: "Beyoncé", id: "6vWDO969PvNqNYHIOW5v0m", img: "https://i.scdn.co/image/ab6761610000e5eb1fb3286f7edd7c8a32a67bc4" },
                { name: "Harry Styles", id: "6KImCVD70vtIoJWnq6nGn3", img: "https://i.scdn.co/image/ab6761610000e5ebf104d4f8fbab58a2745347db" },
                { name: "Bruce Springsteen", id: "3eqjTLE0HfPfh78zjh6TqT", img: "https://i.scdn.co/image/ab6761610000e5eb79953cd3b84171ea7e4b9015" },
                { name: "Bob Dylan", id: "74ASZWbe4lXaubB36ztrGX", img: "https://i.scdn.co/image/ab6761610000e5eb545ed9d846b9a89bc2138cd3" }
            ]
        },
        "universal music group": {
            name: "Universal Music Group",
            logo_url: "https://raw.githubusercontent.com/WilRhy/raw-image-links/refs/heads/main/universal.png",
            description: "Universal Music Group (UMG) is the world's largest music company.",
            founder: "J.C. Kapp",
            founded: "1934",
            links: [{ title: "Official Website", url: "https://www.universalmusic.com/" }],
            artists: [
                { name: "Taylor Swift", id: "06HL4z0CvFAxyc27GXpf02", img: "https://i.scdn.co/image/ab6761610000e5eb1d36d4df92e212453664d0a6" },
                { name: "Drake", id: "3TVXtAsR1Inumwj472S9r4", img: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9" },
                { name: "The Weeknd", id: "1Xyo4u8uXC1ZmMpatF05PJ", img: "https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe713a61f1c60af" },
                { name: "Billie Eilish", id: "6qqNVTkY8uBg9cP3Jd7DAH", img: "https://i.scdn.co/image/ab6761610000e5eb6622b10ef706788e99e28f73" },
                { name: "Ariana Grande", id: "66CXWjxzNUsdJxJ2JdwvnR", img: "https://i.scdn.co/image/ab6761610000e5ebcdce9430df9bc9fc2897f549" }
            ]
        },
        "virgin records": {
            name: "Virgin Records",
            logo_url: "https://raw.githubusercontent.com/WilRhy/raw-image-links/refs/heads/main/virgin.png",
            description: "Virgin Records is a British record label founded by Richard Branson. It currently operates as a global distribution division under Universal Music Group.",
            founder: "Richard Branson",
            founded: "1972",
            links: [{ title: "Official Website", url: "https://www.virginmusic.com/" }],
            artists: [
                { name: "Gorillaz", id: "3AA28KZvwAUcZuOKwyblJQ", img: "https://i.scdn.co/image/ab6761610000e5eb4ff9fa38865cbb64f84ca7ad" },
                { name: "The Smashing Pumpkins", id: "40Yq4vzPs9VNUrIBG5Jr2i", img: "https://i.scdn.co/image/ab6761610000e5eb3cb0e4c5148003f90554cbe5" },
                { name: "Iggy Pop", id: "33EUXrFKGjpUSGacqEHhU4", img: "https://i.scdn.co/image/ab6761610000e5eb4c4cb84e724a737f26d24f92" },
                { name: "Janet Jackson", id: "4qwGe91Bz9K2T8jXTZ815W", img: "https://i.scdn.co/image/ab6761610000e5eb3e8be53ee11306efb5c65f97" }
            ]
        }
    };
    
    hardcodedLabels["virgin music"] = hardcodedLabels["virgin records"];
    hardcodedLabels["umg recordings, inc."] = hardcodedLabels["universal music group"];
    hardcodedLabels["umg recordings"] = hardcodedLabels["universal music group"];
    hardcodedLabels["universal music"] = hardcodedLabels["universal music group"];

    // Dynamic store for labels fetched from database.json
    let dynamicGitHubLabels = {};
    let isGitHubLabelsLoaded = false;

    async function fetchGitHubLabelsDatabase() {
        if (isGitHubLabelsLoaded) return;
        try {
            let res = await fetch(`https://raw.githubusercontent.com/${GITHUB_USER}/${REPO_NAME}/main/labels/database.json?t=${Date.now()}`);
            if (!res.ok) {
                res = await fetch(`https://raw.githubusercontent.com/${GITHUB_USER}/${REPO_NAME}/master/labels/database.json?t=${Date.now()}`);
            }
            if (!res.ok) return;

            const dbData = await res.json();
            
            if (Array.isArray(dbData)) {
                dbData.forEach(label => {
                    if (label && label.name) {
                        const cleanKey = label.name.toLowerCase().trim();
                        dynamicGitHubLabels[cleanKey] = label;
                    }
                });
            } else if (typeof dbData === 'object' && dbData !== null) {
                Object.keys(dbData).forEach(key => {
                    const label = dbData[key];
                    if (label && label.name) {
                        const cleanKey = label.name.toLowerCase().trim();
                        dynamicGitHubLabels[cleanKey] = label;
                    }
                });
            }

            isGitHubLabelsLoaded = true;
            refreshHubPageIfActive();
        } catch (err) {
            console.error("Failed to fetch GitHub database.json:", err);
        }
    }

    fetchGitHubLabelsDatabase();

    function getAllAvailableLabels() {
        return { ...hardcodedLabels, ...dynamicGitHubLabels };
    }

    const featuredLabelsList = ["Paper Vinyl Records", "Universal Music Group", "Columbia Records", "Virgin Records"];

    const proLinks = {
        "ASCAP": "https://www.ascap.com/",
        "BMI": "https://www.bmi.com/",
        "SESAC": "https://www.sesac.com/",
        "PRS": "https://www.prsformusic.com/",
        "GEMA": "https://www.gema.de/",
        "SOCAN": "https://www.socan.com/",
        "PPL": "https://www.ppluk.com/"
    };

    // --- INJECT CUSTOM CSS ---
    if (!document.getElementById("aboutify-custom-styles")) {
        const styleEl = document.createElement("style");
        styleEl.id = "aboutify-custom-styles";
        styleEl.innerHTML = `
            @keyframes aboutifyFadeIn { from { opacity: 0; } to { opacity: 1; } }
            div[role="dialog"]:has(.aboutify-wiki-container) {
                background-color: #121212 !important;
                border-radius: 12px !important;
                max-width: 720px !important;
                width: 100% !important;
                overflow: hidden !important;
            }
            .aboutify-wiki-container {
                background-color: #121212 !important;
                color: #ffffff !important;
                padding: 10px 5px 10px 15px !important;
                border-radius: 12px !important;
                width: 100%;
                max-width: 700px;
                box-sizing: border-box;
                overflow-y: auto;
                max-height: 72vh;
            }
            .wiki-artist-chip { transition: all 0.2s cubic-bezier(0.3, 0, 0, 1) !important; }
            .wiki-artist-chip:hover {
                background-color: #1db954 !important;
                color: #000000 !important;
                transform: scale(1.04) !important;
            }
            .wiki-artist-chip:hover img { filter: brightness(0); }
            .hub-featured-card { transition: background-color 0.2s ease, transform 0.2s ease; }
            .hub-featured-card:hover {
                background-color: #282828 !important;
                transform: translateY(-2px);
            }
            .aboutify-link, .aboutify-pro-link:hover { color: #1ed760 !important; }
            .aboutify-scrollbar::-webkit-scrollbar { width: 8px; }
            .aboutify-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 4px; }
            .aboutify-scrollbar::-webkit-scrollbar-thumb { background: #535353; border-radius: 4px; }
            .aboutify-scrollbar::-webkit-scrollbar-thumb:hover { background: #b3b3b3; }
        `;
        document.head.appendChild(styleEl);
    }

    function refreshHubPageIfActive() {
        if (Spicetify.Platform.History.location.pathname === '/labels-hub') {
            const pageEl = document.getElementById('labels-hub-full-page');
            if (pageEl) pageEl.remove();
            enforceHubPage();
        }
    }

    // --- TOPBAR BUTTON & SETTINGS MENU ---
    const vinylIconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`;

    new Spicetify.Topbar.Button("Labels Hub", vinylIconSvg, () => {
        Spicetify.Platform.History.push("/labels-hub");
    });

    new Spicetify.Menu.Item("Aboutify Info", false, () => {
        Spicetify.PopupModal.display({
            title: `Aboutify v${CURRENT_VERSION}`,
            content: `
                <div class="aboutify-wiki-container" style="font-size: 14px;">
                    <div style="text-align: center; margin-bottom: 24px; background: #181818; padding: 15px; border-radius: 8px;">
                        <p style="margin-bottom: 8px; color: #b3b3b3;">Made by <a href="#" id="aboutify-wilrhy-link" class="aboutify-link" style="color: #1db954; font-weight: bold; text-decoration: underline;">WilRhy</a></p>
                        <p style="margin: 0; color: #b3b3b3;">Published by <a href="#" id="aboutify-label-link" class="aboutify-link" style="color: #1db954; font-weight: bold; text-decoration: underline;">Paper Vinyl Records</a></p>
                    </div>
                    <button id="aboutify-restart-btn" style="width: 100%; background: #1db954; color: #000; border: none; padding: 12px; border-radius: 50px; font-weight: bold; cursor: pointer;">Restart Spotify</button>
                </div>
            `
        });

        setTimeout(() => {
            document.getElementById("aboutify-restart-btn")?.addEventListener("click", () => location.reload());

            document.getElementById("aboutify-wilrhy-link")?.addEventListener("click", (e) => {
                e.preventDefault();
                Spicetify.Platform.History.push(`/artist/1b29I5ZHtYsY0QF2NDxAai`);
                document.querySelector('button[aria-label="Close"]')?.click();
            });
            document.getElementById("aboutify-label-link")?.addEventListener("click", (e) => {
                e.preventDefault();
                openLabelWiki("Paper Vinyl Records");
            });
        }, 100);
    }).register();

    // --- CREATE A WIKI TUTORIAL MODAL ---
    function showCreateWikiTutorial() {
        Spicetify.PopupModal.display({
            title: "📖 How to Create a Label Wiki",
            content: `
                <div class="aboutify-wiki-container" style="font-size: 14px;">
                    <p style="color: #b3b3b3; margin-top: 0;">Want to add a new record label wiki to the Aboutify database? Follow these quick steps:</p>
                    <ol style="color: #b3b3b3; padding-left: 18px; line-height: 1.6; margin-bottom: 20px;">
                        <li>Fork the <a href="https://github.com/${GITHUB_USER}/${REPO_NAME}" target="_blank" class="aboutify-link">Aboutify GitHub Repository</a>.</li>
                        <li>Edit the <code style="background: #282828; padding: 2px 6px; border-radius: 4px; color: #1db954;">labels/database.json</code> file in the repository.</li>
                        <li>Add your record label object to the file using the template below, and submit a Pull Request!</li>
                    </ol>
                    <h4 style="margin: 0 0 8px 0; color: #fff;">JSON Template Entry:</h4>
                    <pre class="aboutify-scrollbar" style="background: #181818; padding: 12px; border-radius: 8px; border: 1px solid #282828; color: #1db954; font-size: 12px; overflow-x: auto; margin: 0;"><code>{
  "name": "My Record Label",
  "logo_url": "https://link-to-logo.png",
  "description": "Description of the label...",
  "founder": "Founder Name",
  "founded": "2026",
  "creator": "YourGitHubUsername",
  "links": [
    { "title": "Official Website", "url": "https://example.com" }
  ],
  "artists": [
    { "name": "Artist Name", "id": "SpotifyArtistID", "img": "https://artist-image-url.jpg" }
  ]
}</code></pre>
                </div>
            `
        });
    }

    // --- FULL PAGE RENDERING (Labels Hub) ---
    let pageObserver = null;

    function enforceHubPage() {
        const mainView = document.querySelector('main') || document.querySelector('.main-view-container');
        if (!mainView) return;

        let hubPage = document.getElementById('labels-hub-full-page');
        
        if (!hubPage) {
            hubPage = document.createElement('div');
            hubPage.id = 'labels-hub-full-page';
            hubPage.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; background: #121212; overflow-y: auto; padding: 32px; box-sizing: border-box; animation: aboutifyFadeIn 0.2s ease forwards;';
            
            const allLabelsMap = getAllAvailableLabels();
            const allLabelNames = Object.values(allLabelsMap).map(l => l.name);
            const uniqueLabels = [...new Set(allLabelNames)].sort((a, b) => a.localeCompare(b));

            // 1. Render Dedicated Featured Section Cards
            const featuredCardsHtml = featuredLabelsList.map(name => {
                return `
                    <div class="hub-featured-card" data-label="${name}" style="background: #181818; padding: 20px; border-radius: 8px; cursor: pointer; border: 1px solid #282828; display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h4 style="margin: 0 0 4px 0; color: #1db954; font-size: 16px;">${name}</h4>
                            <p style="margin: 0; font-size: 12px; color: #a7a7a7;">Official Registry</p>
                        </div>
                        <span style="font-size: 18px; color: #535353;">⭐</span>
                    </div>
                `;
            }).join('');

            // 2. Group Alphabetically by Letter (A, B, C...)
            const groupedByLetter = {};
            uniqueLabels.forEach(name => {
                const firstChar = name.charAt(0).toUpperCase();
                const letterKey = /[A-Z]/.test(firstChar) ? firstChar : "#";
                if (!groupedByLetter[letterKey]) groupedByLetter[letterKey] = [];
                groupedByLetter[letterKey].push(name);
            });

            const sortedLetters = Object.keys(groupedByLetter).sort((a, b) => {
                if (a === "#") return 1;
                if (b === "#") return -1;
                return a.localeCompare(b);
            });

            const alphabeticalSectionsHtml = sortedLetters.map(letter => {
                const labelsInGroup = groupedByLetter[letter];
                const cardsHtml = labelsInGroup.map(name => {
                    return `
                        <div class="hub-featured-card" data-label="${name}" style="background: #181818; padding: 16px; border-radius: 8px; cursor: pointer; border: 1px solid #282828;">
                            <h4 style="margin: 0; color: #fff; font-size: 15px;">${name}</h4>
                        </div>
                    `;
                }).join('');

                return `
                    <div style="margin-bottom: 24px;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <span style="background: #1db954; color: #000; font-weight: 900; font-size: 16px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 6px;">${letter}</span>
                            <div style="flex: 1; height: 1px; background: #282828;"></div>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 12px;">${cardsHtml}</div>
                    </div>
                `;
            }).join('');

            hubPage.innerHTML = `
                <div style="max-width: 960px; margin: 0 auto; padding-bottom: 80px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; border-bottom: 1px solid #282828; padding-bottom: 20px;">
                        <div>
                            <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #1db954; font-weight: 800;">Navigation</span>
                            <h1 style="font-size: 38px; font-weight: 900; margin: 4px 0 8px 0; color: #fff;">Record Labels Hub</h1>
                            <p style="color: #b3b3b3; font-size: 14px; margin: 0;">Browse record label rosters, details, and official music registries.</p>
                        </div>
                        <button id="hub-create-wiki-trigger" style="background: #282828; color: #1db954; border: 1px solid #1db954; padding: 10px 18px; border-radius: 50px; font-weight: bold; cursor: pointer; font-size: 13px;">➕ Create a Label Wiki</button>
                    </div>

                    <div style="background: #181818; padding: 24px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #282828;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <h3 style="margin: 0; color: #1db954; font-size: 16px;">🔍 Search Label Database</h3>
                            <span style="font-size: 12px; color: #a7a7a7;">Song-finder partial match enabled</span>
                        </div>
                        <div style="display: flex; gap: 12px;">
                            <input type="text" id="page-hub-search-input" placeholder="Type part of a label name (e.g. 'Columb' or 'Uni')..." style="flex: 1; background: #282828; border: 1px solid #3e3e3e; color: #fff; padding: 12px 16px; border-radius: 8px; font-size: 14px; outline: none;" />
                            <button id="page-hub-search-btn" style="background: #1db954; color: #000; border: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 14px;">Search</button>
                        </div>
                    </div>

                    <!-- Dedicated Featured Section -->
                    <div style="margin-bottom: 32px;">
                        <h3 style="margin: 0 0 16px 0; color: #fff; font-size: 20px; font-weight: 700;">⭐ Featured Record Labels</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px;">${featuredCardsHtml}</div>
                    </div>

                    <!-- Alphabetical Grouped Section -->
                    <div style="margin-bottom: 32px;">
                        <h3 style="margin: 0 0 16px 0; color: #fff; font-size: 20px; font-weight: 700;">🔤 Alphabetical Label Index</h3>
                        ${alphabeticalSectionsHtml}
                    </div>
                </div>
            `;
            
            mainView.appendChild(hubPage);

            setTimeout(() => {
                document.getElementById("hub-create-wiki-trigger")?.addEventListener("click", showCreateWikiTutorial);
                
                const searchInput = document.getElementById("page-hub-search-input");
                const triggerSearch = () => {
                    const val = searchInput?.value?.trim();
                    if (val) performPartialDatabaseSearch(val);
                };
                document.getElementById("page-hub-search-btn")?.addEventListener("click", triggerSearch);
                searchInput?.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") triggerSearch();
                });

                document.querySelectorAll(".hub-featured-card").forEach(card => {
                    card.addEventListener("click", () => openLabelWiki(card.dataset.label));
                });
            }, 50);

        } else if (hubPage.parentElement !== mainView) {
            mainView.appendChild(hubPage);
        }
    }

    // --- PARTIAL / SUBSTRING SEARCH LOGIC ---
    function performPartialDatabaseSearch(query) {
        const cleanQuery = query.toLowerCase().trim();
        const allLabelsMap = getAllAvailableLabels();
        const uniqueNames = [...new Set(Object.values(allLabelsMap).map(l => l.name))];

        const matched = uniqueNames.filter(name => name.toLowerCase().includes(cleanQuery));

        if (matched.length === 1) {
            openLabelWiki(matched[0]);
        } else if (matched.length > 1) {
            const choicesHtml = matched.map(name => `
                <button class="wiki-artist-chip hub-search-result-choice" data-label="${name}" style="background: #282828; color: #fff; border: 1px solid #3e3e3e; padding: 10px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; text-align: left; width: 100%; margin-bottom: 8px;">
                    ${name}
                </button>
            `).join('');

            Spicetify.PopupModal.display({
                title: `🔍 Search Results for "${query}"`,
                content: `
                    <div class="aboutify-wiki-container" style="font-size: 14px;">
                        <p style="color: #b3b3b3; margin-top: 0;">Found ${matched.length} matching labels:</p>
                        <div class="aboutify-scrollbar" style="max-height: 250px; overflow-y: auto;">
                            ${choicesHtml}
                        </div>
                    </div>
                `
            });

            setTimeout(() => {
                document.querySelectorAll(".hub-search-result-choice").forEach(btn => {
                    btn.addEventListener("click", () => {
                        document.querySelector('button[aria-label="Close"]')?.click();
                        openLabelWiki(btn.dataset.label);
                    });
                });
            }, 50);
        } else {
            Spicetify.showNotification(`No labels found matching "${query}"`);
        }
    }

    function handleRoute() {
        const path = Spicetify.Platform.History.location.pathname;
        const mainView = document.querySelector('main') || document.querySelector('.main-view-container');

        const hubPage = document.getElementById('labels-hub-full-page');

        if (path === '/labels-hub') {
            if (!pageObserver && mainView) {
                pageObserver = new MutationObserver(() => enforceHubPage());
                pageObserver.observe(mainView, { childList: true, subtree: true });
            }
            enforceHubPage();
        } else {
            if (pageObserver) {
                pageObserver.disconnect();
                pageObserver = null;
            }
            if (hubPage) hubPage.remove();
        }
    }

    Spicetify.Platform.History.listen(handleRoute);
    setTimeout(handleRoute, 500);

    // --- SPOTIFY-NATIVE WIKI MODAL RENDERER ---
    function renderLabelWikiHTML(labelName, data, creatorInfo, editUrl) {
        const logoHtml = data.logo_url 
            ? `<img src="${data.logo_url}" alt="${labelName} Logo" style="max-height: 70px; max-width: 220px; object-fit: contain; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 4px; border-radius: 4px;" />` 
            : '';

        const linksHtml = (data.links || []).map(l => 
            `<li style="margin-bottom: 8px;"><a href="${l.url}" target="_blank" class="aboutify-link" style="color: #1db954; text-decoration: none; font-weight: 500;">${l.title} ↗</a></li>`
        ).join('');

        const artists = data.artists || [];
        const renderChip = (a) => `
            <span class="wiki-artist-chip" data-id="${a.id || ''}" data-name="${a.name}" style="display: inline-flex; align-items: center; gap: 8px; background: #282828; padding: 6px 14px 6px 6px; border-radius: 50px; cursor: pointer; color: #fff; margin: 4px; font-weight: 600; font-size: 13px; border: 1px solid #3e3e3e;">
                <img src="${a.img || 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg'}" style="width: 24px; height: 24px; border-radius: 50%; object-fit: cover;" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg'" />
                ${a.name}
            </span>`;

        const artistsHtml = artists.length > 0 
            ? artists.map(renderChip).join('')
            : '<p style="color: #a7a7a7; font-size: 13px; margin: 0;">No artists listed on this roster yet.</p>';

        const scrollableRosterContainer = `
            <div class="aboutify-scrollbar" style="max-height: 180px; overflow-y: auto; display: flex; flex-wrap: wrap; background: #181818; padding: 12px; border-radius: 8px; border: 1px solid #282828; align-content: flex-start;">
                ${artistsHtml}
            </div>
        `;

        let creatorHtml = "";
        if (creatorInfo.isVerified) {
            creatorHtml = `<span style="color: #a7a7a7; font-size: 12px;">Wiki created by Aboutify Development ✔</span>`;
        } else {
            const ghUser = creatorInfo.githubUser || GITHUB_USER;
            creatorHtml = `<span style="color: #a7a7a7; font-size: 12px;">Wiki created by <a href="https://github.com/${ghUser}" target="_blank" class="aboutify-link" style="color: #1db954; text-decoration: underline;">${ghUser}</a></span>`;
        }

        return `
            <div class="aboutify-wiki-container">
                <div style="display: flex; flex-direction: column; gap: 20px; padding-right: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid #282828; padding-bottom: 16px;">
                        <div>
                            ${logoHtml}
                            <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #1db954; font-weight: 700;">Record Label</div>
                            <h2 style="margin: 2px 0 0 0; color: #fff; font-size: 24px; font-weight: 800;">${labelName}</h2>
                        </div>
                    </div>
                    <div style="display: flex; gap: 20px;">
                        <div style="flex: 2;">
                            <h3 style="margin: 0 0 10px 0; color: #fff; font-size: 16px; font-weight: 700;">About</h3>
                            <p style="font-size: 14px; line-height: 1.6; color: #b3b3b3; margin: 0;">${data.description || "No description provided for this label."}</p>
                        </div>
                        <div style="flex: 1; background: #181818; padding: 16px; border-radius: 8px; border: 1px solid #282828; height: fit-content;">
                            <h4 style="margin: 0 0 12px 0; font-size: 14px; color: #fff; font-weight: 700; border-bottom: 1px solid #282828; padding-bottom: 8px;">Details & Links</h4>
                            ${data.founder ? `<p style="margin: 0 0 6px 0; font-size: 13px; color: #b3b3b3;"><b style="color: #fff;">Founder:</b> ${data.founder}</p>` : ''}
                            ${data.founded ? `<p style="margin: 0 0 12px 0; font-size: 13px; color: #b3b3b3;"><b style="color: #fff;">Founded:</b> ${data.founded}</p>` : ''}
                            <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px;">${linksHtml}</ul>
                        </div>
                    </div>
                    <div>
                        <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #fff; font-weight: 700;">Label Roster (${artists.length} Total)</h3>
                        ${scrollableRosterContainer}
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #282828; padding-top: 12px; margin-bottom: 5px;">
                        ${creatorHtml}
                        ${editUrl ? `<a href="${editUrl}" target="_blank" class="aboutify-link" style="color: #a7a7a7; text-decoration: none; font-size: 12px;">✏️ Edit database on GitHub</a>` : '<span style="color: #a7a7a7; font-size: 12px;">🔒 Verified Official Data</span>'}
                    </div>
                </div>
            </div>
        `;
    }

    async function openLabelWiki(labelName) {
        let cleanName = labelName.toLowerCase().trim();
        if (cleanName.includes("virgin")) {
            cleanName = "virgin records";
        } else if (cleanName.includes("umg") || cleanName.includes("universal")) {
            cleanName = "universal music group";
        }
        
        const allLabelsMap = getAllAvailableLabels();
        if (allLabelsMap[cleanName]) {
            const targetData = allLabelsMap[cleanName];
            const isHardcoded = !!hardcodedLabels[cleanName];
            const editUrl = isHardcoded ? null : `https://github.com/${GITHUB_USER}/${REPO_NAME}/blob/main/labels/database.json`;
            const creatorInfo = isHardcoded ? { isVerified: true } : { isVerified: false, githubUser: targetData.creator || GITHUB_USER };
            
            displayModal(targetData.name, targetData, creatorInfo, editUrl);
            return;
        }

        Spicetify.showNotification(`No wiki page found for ${labelName}`);
    }

    function displayModal(labelName, data, creatorInfo, editUrl) {
        Spicetify.PopupModal.display({
            title: "", 
            content: renderLabelWikiHTML(labelName, data, creatorInfo, editUrl)
        });

        setTimeout(() => {
            document.querySelectorAll('.wiki-artist-chip').forEach(chip => {
                chip.addEventListener('click', (e) => {
                    e.stopPropagation(); 
                    const artistId = chip.dataset.id;
                    const artistName = chip.dataset.name;
                    
                    if (artistId && artistId.trim() !== "") {
                        Spicetify.Platform.History.push(`/artist/${artistId}`);
                        document.querySelector('button[aria-label="Close"]')?.click();
                    } else if (artistName) {
                        Spicetify.Platform.History.push(`/search/${encodeURIComponent(artistName)}/artists`);
                        document.querySelector('button[aria-label="Close"]')?.click();
                    }
                });
            });
        }, 100);
    }

    // --- DOM OBSERVER ---
    let observerTimeout;
    const trackObserver = new MutationObserver(() => {
        clearTimeout(observerTimeout);
        
        observerTimeout = setTimeout(() => {
            trackObserver.disconnect();
            
            const elements = document.querySelectorAll('p, span');
            
            elements.forEach(el => {
                if (el.dataset.modified || el.children.length > 0) return;
                
                const text = el.textContent.trim();
                if (!text) return;

                let modified = false;

                if (text.startsWith("Source:") || text.includes("Source: ") || text.includes("©") || text.includes("℗") || text.startsWith("Publishing:")) {
                    let html = el.innerHTML;
                    
                    Object.keys(proLinks).forEach(pro => {
                        const regex = new RegExp(`\\b${pro}\\b(?![^<]*>)`, 'g');
                        if (regex.test(html)) {
                            html = html.replace(regex, `<a href="${proLinks[pro]}" target="_blank" class="aboutify-pro-link" style="color: #1db954; text-decoration: underline; cursor: pointer;" onclick="event.stopPropagation()">${pro}</a>`);
                            modified = true;
                        }
                    });

                    if (text.startsWith("Source:") || text.includes("Source: ")) {
                        const rawLabels = text.replace(/^.*Source:\s*/, '').trim();
                        const linkedLabels = rawLabels.split(/\s*(?:\/|,|&|\band\b)\s*/i).map(part => {
                            const clean = part.trim();
                            if (!clean) return '';
                            if (proLinks[clean]) return clean; 
                            return `<a href="#" class="custom-label-link" data-label="${clean}" style="color: #1db954; text-decoration: underline; cursor: pointer;">${clean}</a>`;
                        }).filter(Boolean).join(" / ");
                        
                        html = html.replace(rawLabels, linkedLabels);
                        modified = true;
                    }

                    if (text.includes("©") || text.includes("℗")) {
                        const allLabelsMap = getAllAvailableLabels();
                        const labelKeywords = Object.values(allLabelsMap).map(l => ({
                            keyword: l.name,
                            labelName: l.name
                        })).concat([
                            { keyword: "UMG Recordings, Inc.", labelName: "Universal Music Group" },
                            { keyword: "UMG Recordings", labelName: "Universal Music Group" },
                            { keyword: "Universal Music", labelName: "Universal Music Group" }
                        ]).sort((a, b) => b.keyword.length - a.keyword.length);
                        
                        labelKeywords.forEach(item => {
                            const escaped = item.keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                            const regex = new RegExp(`(?<!href=["'][^"']*)\\b${escaped}\\b(?!["'][^"']*>)`, 'gi');
                            
                            if (regex.test(html)) {
                                html = html.replace(regex, (match) => {
                                    return `<a href="#" class="custom-label-link" data-label="${item.labelName}" style="color: #1db954; text-decoration: underline; cursor: pointer;">${match}</a>`;
                                });
                                modified = true;
                            }
                        });
                    }
                    
                    if (modified) el.innerHTML = html;
                }
                
                if (modified) {
                    el.dataset.modified = "true";
                    
                    el.querySelectorAll('.custom-label-link').forEach(link => {
                        link.addEventListener("click", (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openLabelWiki(link.dataset.label);
                        });
                    });
                }
            });

            trackObserver.observe(document.body, { childList: true, subtree: true });
        }, 250); 
    });

    trackObserver.observe(document.body, { childList: true, subtree: true });

})();