! function(e) {
    function t(t) {
        for (var s, l, r = t[0], d = t[1], n = t[2], u = 0, c = []; u < r.length; u++)
            l = r[u], a[l] && c.push(a[l][0]), a[l] = 0;
        for (s in d) Object.prototype.hasOwnProperty.call(d, s) && (e[s] = d[s]);
        for (_ && _(t); c.length;)
            c.shift()();
        return o.push.apply(o, n || []), i()
    }

    function i() {
        for (var e, t = 0; t < o.length; t++) {
            for (var i = o[t], s = !0, r = 1; r < i.length; r++) {
                var d = i[r];
                0 !== a[d] && (s = !1)
            }
            s && (o.splice(t--, 1), e = l(l.s = i[0]))
        }
        return e
    }
    var s = {},
        a = { "web/audio": 0 },
        o = [];

    function l(t) { if (s[t]) return s[t].exports; var i = s[t] = { i: t, l: !1, exports: {} }; return e[t].call(i.exports, i, i.exports, l), i.l = !0, i.exports }
    l.m = e, l.c = s, l.d = function(e, t, i) { l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) }, l.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, l.t = function(e, t) {
        if (1 & t && (e = l(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (l.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var s in e) l.d(i, s, function(t) { return e[t] }.bind(null, s));
        return i
    }, l.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return l.d(t, "a", t), t }, l.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, l.p = "/js/cmodules/";
    var r = window.webpackJsonp = window.webpackJsonp || [],
        d = r.push.bind(r);
    r.push = t, r = r.slice();
    for (var n = 0; n < r.length; n++) t(r[n]);
    var _ = d;
    o.push([104, "bundles/audioplayer", "bundles/common"]), i()
}({
    104: function(e, t, i) { e.exports = i("KEyx") },
    KEyx: function(__webpack_module__, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Oyvg"),
            core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rGqo"),
            core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Btvt"),
            core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Vd3H"),
            core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("OG14"),
            core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("KKXr"),
            core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pIFo"),
            _lib_stats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("XzvV"),
            _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rEJs"),
            _shared_audio_AudioStats__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("6ng+"),
            _web_audio_player_stat_onAdditionalEvent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("5xrp"),
            _web_auto_list_auto_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("ldAL"),
            _web_audio_playlist__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("v+/n"),
            _shared_user_user_env__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("W9Tc"),
            SLIDER_TIMEOUT = 1e4,
            sectionsToUpdate = [];

        function currentAudioPage(e) { var t = gpeByClass("_audio_page_layout", e); return !!t && data(t, "audioPage") }

        function AudioPage(e, t) {
            data(e, "audioPage", this), extend(cur.lang || {}, t.langs), getAudioPlayer().langs = t.langs, this._data = t, this._ownerId = t.ownerId, this.isLayer() || (cur.audioPage = this), this.isLayer() && uiSearch.init("audio_search_layer"), AudioUtils.toggleAudioHQBodyClass(), this._els = { pageContainer: e, sections: geByClass1("_audio_page_sections", e), playerWrap: geByClass1("_audio_page_player_wrap", e), player: geByClass1("_audio_page_player", e), contentBlock: geByClass1("_audio_page_content_block", e) || geByClass1("_playlist_page_content_block", e), scrollWrap: geByClass1("_audio_page_content_block_wrap", e), searchSectionAudios: geByClass1("_audio_section_search__local_audios_list", e), searchSectionAudiosHeader: geByClass1("audio_section_search__local_audios_header", e), searchSectionPlaylists: geByClass1("_audio_section_search__local_playlists_list", e), searchSectionPlaylistsHeader: geByClass1("_audio_section_search__local_playlists_header", e), searchNoLocalResults: geByClass1("_audio_local_no_results", e), searchGlobalBlocks: geByClass1("_audio_section_global_search__blocks", e), searchGlobalCommunitiesPlace: geByClass1("_audio_section_global_search__communities_place", e), searchGlobalPlaylistsPlace: geByClass1("_audio_section_global_search__playlists_place", e), searchGlobalArtistsPlace: geByClass1("_audio_section_global_search__artists_place", e), searchGlobalAudiosBlock: geByClass1("_audio_section_global_search__audios_block", e), searchGlobalAudiosBlockHeader: geByClass1("_audio_section_global_search__audios_header", e), searchGlobalAudiosList: geByClass1("_audio_section_global_search__audios_list", e), recomsBlocks: geByClass1("_audio_recoms_blocks", e), searchBlocks: geByClass1("_audio_search_blocks", e), searchInput: geByClass1("ui_search_field", geByClass1("_audio_search", e)), footer: geByClass1("_audio_page__footer", e), footerNowPlayingInfo: geByClass1("_audio_page__footer_now_playing", e), footerClearNowPlayingButton: geByClass1("_audio_page__footer_clear_playlist", e) }, this.isLayer() && (this._scroll = new uiScroll(this._els.scrollWrap, { global: !0, stopScrollPropagation: !0, stopScrollPropagationAlways: !0 })), this._readyAudio = this._data.readyAudio;
            var i = this._data.readyPlaylist;
            i && (this._pagePlaylist = getAudioPlayer().getPlaylist(i.type, i.ownerId, i.id), this._pagePlaylist.mergeWith(i)), !this._readyAudio && this._pagePlaylist && (this._readyAudio = this._pagePlaylist.getAudioAt(0)), this._data.playlistCoverUploadOptions && (cur.audioCoverUploadOptions = cur.audioCoverUploadOptions || {}, cur.audioCoverUploadOptions[this._ownerId] = this._data.playlistCoverUploadOptions), this.isLayer() || (cur.module = t.module || "audio", cur.oid = this._ownerId, this._ownerId == vk.id ? cur.submodule = "my" : this._ownerId < 0 ? cur.submodule = "group_list" : cur.submodule = "user_list"), vk.id && (this._initPlayer(), this.showPromoBox()), this._initPlaylists(), this.initNavigation(), this.showSection(t.initSection), this._initSearchParams(), this.promoAlbumSlideInit(), this._els.searchInput && this._els.searchInput.focus(), this.isLayer() || this.isPodcastPage() || !nav.objLoc.q || "search_playlists" === nav.objLoc.section || (this._els.searchInput && (this._els.searchInput.value = nav.objLoc.q), this._showSearchSection(nav.objLoc)), this.updateCurrentPlayingInfo(), getAudioPlayer().setStatusExportInfo(this._data.export), this.updateStatusExportControls(), this._initKeyEvents(), window.onAudioPageLoaded && (window.onAudioPageLoaded.call(this), delete window.onAudioPageLoaded), this.updateShuffleButton()
        }
        AudioPage.address = "audio", AudioPage.updateSearchHighlight = function(e) {
            var t = geByClass1("_audio_playlist", gpeByClass("_audio_layout", this));
            toggleClass(t, "audio_search_focused", "focus" == e.type)
        }, AudioPage.onSearchFocused = function(e) { AudioPage.updateSearchHighlight(e) }, AudioPage.onSearchBlurred = function(e) {}, AudioPage.prototype.updatePlaylistsCounter = function(e) {
            if (cur.audioPage && e === cur.audioPage.getOwnerId()) {
                var t = geByClass1("_audio_page__playlists_count_header", cur.audioPage._els.pageContainer);
                if (t) {
                    var i = cur.audioPage._data.playlists.length;
                    t.innerHTML = langNumeric(i, cur.lang.audio_playlists_count_title), toggleClass(gpeByClass("_audio_page_section_layout", t), "audio_section_empty", !i)
                }
            }
        }, AudioPage.deletePlaylist = function(e, t, i) {
            var s = getAudioPlayer().getPlaylist(AudioPlaylist.TYPE_PLAYLIST, e, t),
                a = AudioPlayer.getLang("audio_sure_delete_playlist_box_text");
            a = '<div style="overflow: hidden; text-overflow: ellipsis;">' + (a = a.replace("{name}", s.getTitle())) + "</div>", showFastBox({ title: AudioPlayer.getLang("audio_sure_delete_playlist_box_title"), dark: 1 }, a, AudioPlayer.getLang("audio_sure_delete_playlist_box_yes"), function() {
                ajax.post("al_audio.php", { act: "delete_playlist", hash: i, playlist_owner_id: e, playlist_id: t, page_owner_id: cur.audioPage ? cur.audioPage.getOwnerId() : 0 }, {
                    onDone: function(e) {
                        if (cur.audioPage) {
                            var t = geByClass1("_audio_section__all", cur.audioPage.getPageContainer()),
                                i = geByClass1("_audio_page_block__playlists_items", t);
                            if (t && i) {
                                var s = intval(domData(i, "max-items"));
                                e && i.children.length < s && i.appendChild(se(getTemplate("audio_pl_item", e))), 0 == i.children.length && (addClass(gpeByClass("_audio_page_section_layout", i), "no_playlists"), re(gpeByClass("_audio_page_titled_block", i)))
                            }
                        }
                    },
                    onFail: () => !0
                }), boxQueue && boxQueue.hideAll(), layers && layers.fullhide && layers.fullhide(), each(geByClass("_audio_pl_" + e + "_" + t), function() { re(this) }), cur.audioPage && (cur.audioPage._data.playlists = cur.audioPage._data.playlists.filter(function(i) { return !(i.id == t && i.owner_id == e) }), cur.audioPage.updatePlaylistsCounter && cur.audioPage.updatePlaylistsCounter(e))
            }.bind(this), getLang("global_cancel"))
        }, AudioPage.prototype.getCurrentSection = function() { return this._currentSection }, AudioPage.prototype._initPlaylists = function(e) {
            if (this._data.generic) return e && e([]);
            AudioPage.loadPlaylists(this.getOwnerId(), this._data.playlistsTotal, !0, !1, function(t) { this._data.playlists = this._data.playlists.concat(t), this._data.playlistsIndex = new vkIndexer(this._data.playlists, function(e) { return e.title }), e && e() }.bind(this))
        }, AudioPage.prototype.getOwnerPlaylists = function() { return this._data.playlists }, AudioPage.loadPlaylists = function(ownerId, totalCount, skipFirstChunk, forAttachBox, onDone) {
            var chunkSize = 50,
                chunks = [];
            isFunction(totalCount) && (onDone = totalCount, totalCount = void 0, skipFirstChunk = !1), cur.playlistsCache = cur.playlistsCache || {};
            var cacheKey = ownerId + "_" + intval(skipFirstChunk);
            if (cur.playlistsCache[cacheKey]) return onDone(cur.playlistsCache[cacheKey]);

            function onAllLoaded() {
                var e = [];
                each(chunks, function(t, i) { i && (e = e.concat(i)) }), cur.playlistsCache[cacheKey] = e, onDone && onDone(e)
            }

            function _loadChunk(chunkIndex, _cb) {
                var groupId = cur.group_id || (cur.oid < 0 ? -cur.oid : 0);
                ajax.post("al_audio.php?act=owner_playlists", { owner_id: ownerId, group_id: groupId, offset: chunkIndex * chunkSize, is_attach: forAttachBox ? 1 : 0 }, { onDone: function onDone(playlists, totalCount, additionalData) { additionalData.templates_script && eval(additionalData.templates_script), additionalData.langs && extend(cur.lang, additionalData.langs), additionalData.audio_playlist_cover_upload_options && (cur.audioCoverUploadOptions = cur.audioCoverUploadOptions || {}, cur.audioCoverUploadOptions[ownerId] = additionalData.audio_playlist_cover_upload_options), chunks[chunkIndex] = playlists, _cb(totalCount) }, onFail: function(e) { if (hide(boxLoader), e) return showFastBox({ title: getLang("global_error") }, e), !0 } })
            }

            function _loadAllChunks(e, t, i) {
                var s = Math.ceil(e / chunkSize);
                if (s && s - t != 0)
                    for (var a = new callHub(i, s - t), o = t; o < s; o++) _loadChunk(o, function() { a.done() });
                else i()
            }
            isUndefined(totalCount) ? _loadChunk(0, function(e) { _loadAllChunks(e, 1, onAllLoaded) }) : _loadAllChunks(totalCount, skipFirstChunk ? 1 : 0, onAllLoaded)
        }, AudioPage.prototype.getOwnerId = function() { return this._ownerId }, AudioPage.prototype.getPageContainer = function() { return this._els.pageContainer }, AudioPage.prototype.canAddToGroup = function() { return this._data.canAudioAddToGroup }, AudioPage.prototype.canEditGroup = function() { return this._data.canEdit }, AudioPage.prototype.updateCurrentPlayingInfo = function() {
            if (this.isLayer()) {
                var e = getAudioPlayer().getCurrentPlaylist(),
                    t = e ? e.getTitle() : "";
                if (t) {
                    var i, s, a, o = e.getOriginalPlaylistRawId();
                    if (o || e.getType() == AudioPlaylist.TYPE_PLAYLIST && e.getAlbumId() > 0) o ? (i = (o = o.split("_"))[0], s = o[1], a = o[2] || "") : (i = e.getOwnerId(), s = e.getAlbumId(), a = e.getAccessHash() || ""), t = '<a href="' + nav.toStr(extend({}, nav.objLoc, { z: "audio_playlist" + i + "_" + s + (a ? "/" + a : "") })) + '" class="audio_page__footer_now_playing_link" onclick="if (checkEvent(event)) { return true } else { AudioUtils.showAudioPlaylist(' + i + ", " + s + ", '" + a + "'); return cancelEvent(event) }\">" + t + "</a>";
                    this._els.footerNowPlayingInfo.innerHTML = getLang("audio_current_playing_from").replace("{playlist}", t)
                } else {
                    var l = getAudioPlayer().getCurrentAudio();
                    AudioUtils.isPodcast(l) ? this._els.footerNowPlayingInfo.innerHTML = getLang("audio_current_playing_from").replace("{playlist}", getLang("audio_podcast_playing").replace("{name}", l[AudioUtils.AUDIO_ITEM_INDEX_PERFORMER])) : this._els.footerNowPlayingInfo.innerHTML = ""
                }
                this._els.footerClearNowPlayingButton.innerHTML = getLang("audio_clear_current_playlist"), toggle(this._els.footer, !!e)
            }
        }, AudioPage.prototype.onSearchFiltersChanged = function(e) {
            var t = window.radioBtns["audio_search_type_" + intval(this.isLayer())],
                i = intval(this._searchSortFilter.selectedItems()[0][0]),
                s = { performer: t.val ? 1 : null, lyrics: hasClass(geByClass1("_audio_fltr_with_lyrics", this._els.pageContainer), "on") ? 1 : null, sort: i ? 1 : null };
            this.syncParametersUI(s);
            var a = e && isObject(e) ? e : s;
            this.isLayer() && (a = extend({}, this._prevLoc, a)), nav.change(a, !1, { fromSearch: !0, filtersChanged: !0 })
        }, AudioPage.prototype._initSearchParams = function() {
            window.radioBtns["audio_search_type_" + intval(this.isLayer())] = { els: geByClass("_audio_search_type", this._els.pageContainer), keep: this.isLayer() };
            var e = geByClass1("_audio_fltr_sort", this._els.pageContainer);
            e && (this._searchSortFilter = new Dropdown(e, this._data.sortFilters, { big: 1, zeroPlaceholder: !0, onChange: this.onSearchFiltersChanged.bind(this) })), this.isLayer() || this.syncParametersUI(nav.objLoc)
        }, AudioPage.prototype.syncParametersUI = function(e) {
            var t = "audio_search_type_" + intval(this.isLayer()),
                i = window.radioBtns[t];
            i && radiobtn(i.els[e.performer ? 1 : 0], !!e.performer, t);
            var s = geByClass1("_audio_fltr_with_lyrics", this._els.pageContainer);
            toggleClass(s, "on", !!e.lyrics);
            var a = { performer: AudioPlayer.getLang("audio_performers_only"), lyrics: AudioPlayer.getLang("audio_search_with_text"), sort: AudioPlayer.getLang("audio_search_by_length") },
                o = this._els.searchInput;
            each(["performer", "lyrics", "sort"], function(t, i) { uiSearch.toggleFilter(o, i, a[i], !!e[i]) })
        }, AudioPage.onFilterRemoved = function(e, t, i) {
            var s = currentAudioPage(t);
            (function() {
                switch (e) {
                    case "performer":
                        var t = "audio_search_type_" + intval(this.isLayer()),
                            s = window.radioBtns[t];
                        radiobtn(s.els[0], 0, t);
                        break;
                    case "sort":
                        var a = this._searchSortFilter.options.defaultItems[0][0];
                        this._searchSortFilter.selectItem(a, !1);
                        break;
                    case "lyrics":
                        removeClass(geByClass1("_audio_fltr_with_lyrics", this._els.pageContainer), "on")
                }
                i || this.onSearchFiltersChanged()
            }).apply(s)
        }, AudioPage.prototype._showSearchSection = function(e) {
            this._toggleSearchProgress(!0);
            var t = getAudioPlayer().getPlaylist(AudioPlaylist.TYPE_PLAYLIST, this.getOwnerId(), AudioPlaylist.DEFAULT_PLAYLIST_ID);
            if (geByClass1("audio_page_player2")) {
                var i = e.globalQuery || e.q;
                this._sectionData = { q: i, performer: e.performer }, this.showSection("search", function() {
                    if (i) {
                        var e = this._data.sectionData.search ? this._data.sectionData.search.qid : 0;
                        Object(_lib_stats__WEBPACK_IMPORTED_MODULE_7__.saveSearchAttemptStats)("audio", 0, !isVisible(this._els.searchNoLocalResults), i, e)
                    }
                    this._toggleSearchProgress(!1)
                }.bind(this))
            } else t.loadAll(function() { this._toggleSearchProgress(!1), this._doShowSearchSection(e) }.bind(this))
        }, AudioPage.prototype._toggleSearchProgress = function(e) { this._els.searchInput && (e ? uiSearch.showProgress(this._els.searchInput) : uiSearch.hideProgress(this._els.searchInput)) }, AudioPage.prototype._doShowSearchSection = function(e) {
            var t = getAudioPlayer();
            if (e && (this._prevSearchParams = e), e = e || this._prevSearchParams) {
                var i = replaceEntities(e.q) + replaceEntities(e.globalQuery || "");
                each(["performer", "lyrics", "sort"], function(t, s) { i += e[s] || 0 }), i += this._ownerId, this._toggleSearchProgress(!0);
                var s = getAudioPlayer().getPlaylist(AudioPlaylist.TYPE_PLAYLIST, this._ownerId, AudioPlaylist.DEFAULT_PLAYLIST_ID);
                s.loadAll(function() {
                    clearTimeout(this._onSilendLoadedTO), this._onSilendLoadedTO = setTimeout(function() {
                        (function() {
                            s.search(e, function(s) {
                                var a = "";
                                this._searchAudiosAutoList && (this._els.searchSectionAudios.innerHTML = "", this._searchAudiosAutoList.destroy());
                                var o = this._data.playlistsIndex ? this._data.playlistsIndex.search(e.q) : [];
                                if (this.showSection("search"), o.length) {
                                    var l = "";
                                    each(o, function(e, t) { l += getTemplate("audio_pl_item", t) }), show(this._els.searchSectionPlaylistsHeader), show(this._els.searchSectionPlaylists), a = this._ownerId == vk.id ? t.langs.audio_found_your_local_playlists : this._ownerId > 0 ? t.langs.audio_found_user_local_playlists : t.langs.audio_found_group_local_playlists, this._els.searchSectionPlaylistsHeader.innerHTML = langNumeric(o.length, a), this._els.searchSectionPlaylists.innerHTML = l
                                } else hide(this._els.searchSectionPlaylistsHeader), hide(this._els.searchSectionPlaylists);
                                var r = getAudioPlayer().getPlaylist(AudioPlaylist.TYPE_SEARCH, vk.id, hashCode(i));
                                r.mergeWith({ list: s, searchParams: { globalQuery: e.globalQuery || e.q, performer: e.performer, lyrics: e.lyrics, sort: e.sort } }), r.setLocalFoundCount(s.length), s.length || o.length ? hide(this._els.searchNoLocalResults) : (show(this._els.searchNoLocalResults), a = vk.id == this._ownerId ? t.langs.audio_no_local_results : this._ownerId > 0 ? t.langs.audio_no_user_local_results : t.langs.audio_no_group_local_results, this._els.searchNoLocalResults.innerHTML = a.replace("{query}", "<strong>" + clean(e.q) + "</strong>")), s.length || (hide(this._els.searchSectionAudiosHeader), hide(this._els.searchSectionAudios)), this._searchAudiosAutoList = new _web_auto_list_auto_list__WEBPACK_IMPORTED_MODULE_11__.default(this._els.searchSectionAudios, {
                                    onNeedRows: function(e, i, o, l, d) {
                                        this._toggleSearchProgress(!0), r.load(i, function() {
                                            if (this._toggleSearchProgress(!1), !d.isDone()) {
                                                if (0 == i && (s.length ? (show(this._els.searchSectionAudiosHeader), show(this._els.searchSectionAudios), a = this._ownerId == vk.id ? t.langs.audio_found_your_local : this._ownerId > 0 ? t.langs.audio_found_user_local : t.langs.audio_found_group_local, this._els.searchSectionAudiosHeader.innerHTML = langNumeric(s.length, a), toggleClass(this._els.searchSectionAudios, "audio_owner_list_canedit", !!this._data.canEdit)) : (hide(this._els.searchSectionAudiosHeader), hide(this._els.searchSectionAudios)), hide(this._els.searchGlobalCommunitiesPlace), hide(this._els.searchGlobalPlaylistsPlace), hide(this._els.searchGlobalArtistsPlace)), i == s.length) {
                                                    var o = r.getCommunititesBlock(),
                                                        l = r.getPlaylistsBlock(),
                                                        n = r.getArtistsBlock();
                                                    toggle(this._els.searchGlobalCommunitiesPlace, !!o), toggle(this._els.searchGlobalPlaylistsPlace, !!l), toggle(this._els.searchGlobalArtistsPlace, !!n), this._els.searchGlobalCommunitiesPlace && (this._els.searchGlobalCommunitiesPlace.innerHTML = o || ""), this._els.searchGlobalPlaylistsPlace && (this._els.searchGlobalPlaylistsPlace.innerHTML = l || ""), this._els.searchGlobalArtistsPlace && (this._els.searchGlobalArtistsPlace.innerHTML = n || ""), this._els.searchGlobalAudiosList.innerHTML = "", r.getAudiosCount() > s.length ? (show(this._els.searchGlobalAudiosBlock), d.setListEl(this._els.searchGlobalAudiosList), this._els.searchGlobalAudiosBlockHeader.innerHTML = langNumeric(r.getTotalCount(), t.langs.audio_global_search_found, !0)) : hide(this._els.searchGlobalAudiosBlock)
                                                }
                                                for (var _ = [], u = r.getAudiosList(), c = i, h = i < s.length ? Math.min(s.length, i + 30) : i + 30, p = c; p < h && u[p]; p++) _.push(AudioUtils.drawAudio(u[p]));
                                                e(_)
                                            }
                                        }.bind(this))
                                    }.bind(this)
                                }), this._onSectionOut(function() { this._els.searchSectionAudios.innerHTML = "", this._searchAudiosAutoList && (this._searchAudiosAutoList.destroy(), this._searchAudiosAutoList = !1) }.bind(this)), this._pagePlaylist = r, this._toggleSearchProgress(!1)
                            }.bind(this))
                        }).call(this)
                    }.bind(this))
                }.bind(this))
            }
        }, AudioPage.prototype.showFriendMusic = function(e, t) { return statlogsValueEvent("audio_friends_block", "click_friend"), this.isLayer() ? nav.go({ 0: "/audios" + t }, !1, { friendId: t }) : nav.go("/audios" + t, e), cancelEvent(e) }, AudioPage.prototype._deinitNavigation = function() { cur.nav.pop(), this._navigationInited = !1 }, AudioPage.PageSections = ["recoms_audio", "recoms_block", "search_block", "recoms_personal", "my"];
        var layerSectionsToMainFrame = ["search_block", "search_playlists"];
        AudioPage.prototype.initNavigation = function() {
            this._navigationInited || this.isPodcastPage() || (this._navigationInited = !0, this._prevLoc = {}, cur.nav.push(function(e, t, i, s) {
                var a = this._ignoreResetedSearch;
                if (delete this._ignoreResetedSearch, a && s.fromSearch) return !1;
                if (this.isLayer() && !1 !== this._prevLoc)
                    for (var o in t = clone(this._prevLoc), e = clone(i), t) t.hasOwnProperty(o) && (t[o] && void 0 === i[o] ? e[o] = !1 : t[o] == i[o] && delete e[o]);
                if (e && Object.keys(e).length) {
                    this._deleteDeletedAudios();
                    var l = i.section || "all",
                        r = !1;
                    return 0 === i[0].indexOf("podcasts") && (l = "podcast"), s.tab ? r = !1 : s.fromSearch ? r = !1 : !1 === e.q && 1 == Object.keys(e).length ? r = !1 : s.searchPerformer ? r = !1 : s.friendId && this.isLayer() ? (l = "friend", this.resetSection(l), this._sectionData = { friend_id: s.friendId }, r = !1) : (2 != Object.keys(e).length || !1 !== e.q || isUndefined(e[0])) && isUndefined(e[0]) ? (inArray(e.section, AudioPage.PageSections) || inArray(t.section, AudioPage.PageSections) && !inArray(e.section, AudioPage.PageSections)) && (this.isLayer() && !layerSectionsToMainFrame.includes(i.section) ? (r = !1, this._sectionData = { audio_id: e.audio_id }, l = "recoms", delete this._currentSection) : r = !0) : r = !0, r ? !0 : ("recoms" == l && this.isLayer() && this.resetSection("recoms"), i.q ? (this._els.searchInput && !s.fromSearch && (this._els.searchInput.value = i.q), this._showSearchSection(extend({}, i, s))) : (this._ignoreResetedSearch = !1 === e.q, uiSearch.reset(this._els.searchInput, !0), this.showSection(l), this._switchTab(l)), this.isLayer() ? this._prevLoc = i : nav.setLoc(i), (s.back || s.hist || s.nav) && this.syncParametersUI(i), !1)
                }
            }.bind(this)))
        }, AudioPage.prototype._deleteDeletedAudios = function() {
            var e = AudioUtils.getAddRestoreInfo();
            each(e, function(e, t) { "deleted" != t.state && "recom_hidden" != t.state || getAudioPlayer().deleteAudioFromAllPlaylists(e) })
        }, AudioPage.prototype._switchTab = function(e) {
            if (!this.isPodcastPage()) {
                var t = geByClass1("_audio_section_tab__" + e, this._els.pageContainer);
                t ? uiTabs.switchTab(domFC(t)) : removeClass(geByClass1("ui_tab_sel", this._els.pageContainer), "ui_tab_sel")
            }
        }, AudioPage.prototype.onLayerHide = function() { this._deinitNavigation(), this._deinitKeyEvents(), this._onSectionOut(), delete this._currentSection, this._muteSearch = !0, geByClass1("audio_page_player2") && hide(this._els.searchNoLocalResults), uiSearch.reset(this._els.searchInput, !0) }, AudioPage.prototype.updateLayerHeight = function() {
            var e = 700;
            e = Math.min(e, window.innerHeight - 150), e = Math.max(e, 400), isVisible(this._els.footer) && (e -= getSize(this._els.footer)[1]), setStyle(this._els.scrollWrap, { height: e }), this._els && this._els.scrollWrap && "function" == typeof this._els.scrollWrap.updateScroll && this._els.scrollWrap.updateScroll()
        }, AudioPage.prototype.onLayerShow = function(e) {
            var t = getAudioPlayer().getCurrentPlaylist(),
                i = AudioUtils.isPodcast(getAudioPlayer().getCurrentAudio());
            i ? this.showSection("podcast") : t ? this.showSection("current") : e ? this.showSection(e) : this.showSection("all"), toggleClass(geByClass1("_audio_section_tab__current", this._els.pageContainer), "unshown", !t || i), this.initNavigation(), this.updateCurrentPlayingInfo(), this._initKeyEvents(), this.updateLayerHeight(), this.updateShuffleButton();
            var s = this.getPageCurrentPlaylist(),
                a = getAudioPlayer().getCurrentAudio();
            if (this._audioRowsAutoList && s && a && s.indexOfAudio(a) >= 0)
                for (var o = 10; o--;) {
                    var l = geByClass1(AudioUtils.AUDIO_CURRENT_CLS, this._audioRowsAutoList.getListEl());
                    if (l) {
                        var r = getXY(l)[1];
                        this._scroll.scroller.scrollTop = r - scrollGetY() - 300, this._scroll.update();
                        break
                    }
                    this._audioRowsAutoList.drawMore(), getAudioPlayer().updateCurrentPlaying()
                }
            delete this._muteSearch
        }, AudioPage.prototype.resetSection = function(e) {
            var t = geByClass1("_audio_section__" + e, this._els.sections);
            re(t)
        }, AudioPage.prototype.isUpdateRequested = function(e) { return Array.isArray(sectionsToUpdate) && sectionsToUpdate.includes(e + this.getOwnerId()) }, AudioPage.disableAdsClick = function(e) { statlogsValueEvent("audio_web_ad_link", "click"), nav.go(e) }, AudioPage.prototype.requestUpdate = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            sectionsToUpdate = e.map(e => e + t)
        }, AudioPage.prototype.showSection = function(e, t, i) {
            this.isPodcastPage() && (e = "podcast"), "search" !== this._currentSection || "all" !== e && "current" !== e || uiSearch.reset(this._els.searchInput, !0), layers.fullhide && layers.fullhide(), this._switchTab(e);
            var s = geByClass1("audio_page_player2") && "search" === e || this.isUpdateRequested(e);
            if (this._currentSection !== e || "search" === this._currentSection) {
                this._currentSection = e;
                var a = geByClass1("_audio_section__" + e, this._els.sections),
                    o = this._data.sectionData && this._data.sectionData[e] || {};
                if (a && (!s || !1 === i)) {
                    if (each(geByClass("_audio_section", this._els.pageContainer), function() { hide(this) }), hide(this._els.searchGlobalBlocks), hide(this._els.searchGlobalCommunitiesPlace), hide(this._els.searchGlobalPlaylistsPlace), hide(this._els.searchGlobalArtistsPlace), hide(this._els.searchGlobalAudiosBlock), toggle(this._els.recomsBlocks, "recoms" === e && !this.isLayer()), toggle(this._els.searchBlocks, "search" === e), show(a), geByClass1("audio_page_player2") && (hide(this._els.searchNoLocalResults), "search" === e && !a.innerHTML)) {
                        show(this._els.searchNoLocalResults);
                        var l = vk.id == this._ownerId ? ap.langs.audio_no_local_results : this._ownerId > 0 ? ap.langs.audio_no_user_local_results : ap.langs.audio_no_group_local_results,
                            r = winToUtf(clean(o.searchParams.globalQuery));
                        this._els.searchNoLocalResults.innerHTML = l.replace("{query}", "<strong>" + r + "</strong>")
                    }
                    switch (this._onSectionOut(), delete cur._back, e) {
                        case "current":
                            this._initSection_all(a, o, !0);
                            break;
                        case "friend":
                            this._initSection_all(a, o);
                            break;
                        case "playlists":
                            this._initSection_playlists(a, o);
                            break;
                        case "updates":
                            this._initSection_updates(a, o);
                            break;
                        case "recoms":
                            this.isLayer() || vk.id != this.getOwnerId() ? this._initSection_all(a, o) : this._initSection_recoms(a, o);
                            break;
                        case "search":
                            s && this._initSection_search(a, o);
                            break;
                        case "all":
                        case "recoms_audio":
                        case "recoms_block":
                        case "artist_block":
                        case "search_block":
                            o.isRecomsPlaylists ? this._initSection_playlistsRecoms(e, a, o) : this._initSection_all(a, o);
                            break;
                        case "podcast":
                            this._initSection_podcast(a, o)
                    }
                    return getAudioPlayer().updateCurrentPlaying(), void(isFunction(t) && t())
                }
                var d = this._ownerId;
                if ("podcast" === e && !this.isPodcastPage()) d = (getAudioPlayer().getCurrentAudio() || this._readyAudio)[AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID];
                this.isUpdateRequested(e) && (sectionsToUpdate = null), ajax.post("al_audio.php", extend({ act: "section", section: e, owner_id: d, is_layer: this.isLayer() ? 1 : 0, claim: intval(nav.objLoc.claim) }, this._sectionData || {}), {
                    onDone: (i, a, o) => {
                        if (this._data.sectionData = this._data.sectionData || {}, this._data.sectionData[e] = a, s) {
                            var l = geByClass1("_audio_section__" + e, this._els.sections);
                            l && re(l)
                        }
                        var r = se('<div class="audio_section _audio_section _audio_section__' + e + " audio_section__" + e + ' clear_fix audio_w_covers">' + i + "</div>");
                        this._els.sections.appendChild(r), o || (o = ""), "recoms" === e && (this._els.recomsBlocks.innerHTML = o), "search" === e && (this._els.searchBlocks.innerHTML = o), delete this._currentSection, this.showSection(e, t, !1)
                    },
                    onFail: () => !0
                }), delete this._sectionData
            } else isFunction(t) && t()
        }, AudioPage.prototype._onSectionOut = function(e) { e ? (this._onSectionOutCbs = this._onSectionOutCbs ? this._onSectionOutCbs : [], this._onSectionOutCbs.push(e)) : (each(this._onSectionOutCbs || [], function(e, t) { t() }), this._onSectionOutCbs = []) }, AudioPage.prototype._initSection_search = function(e, t) {
            each(t.playlists || [], function(e, i) {
                if (i) {
                    i.searchParams = t.searchParams;
                    var s = getAudioPlayer().getPlaylist(i.type, i.ownerId, i.id);
                    0 == s.getAudiosList() && s.mergeWith(i)
                }
            })
        }, AudioPage.prototype._initSection_playlistsRecoms = function(e, t, i) {
            var s = geByClass1("audio_page_block__playlists_items", t);
            if (s) {
                var a = i.playlistsData.next,
                    o = 3,
                    l = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                        o ? (o--, setTimeout(function() { r(e, 2 * t) }, t)) : e([])
                    },
                    r = function(t, s) { ajax.post("al_audio.php", { act: "load_playlists_block", block_id: i.playlistsData.id, section: e, offset: a, render_html: 1 }, { onDone: function(e, i) { a = e.next, e && i && i.length ? (o = 3, a = e.next, t(i)) : l(t, s) }, onFail: function() { return l(t, s), !0 } }) },
                    d = new _web_auto_list_auto_list__WEBPACK_IMPORTED_MODULE_11__.default(s, {
                        onNeedRows: function(e) {
                            if (!s.clientHeight) return d && d.destroy();
                            a ? r(e) : e([])
                        },
                        onNoMore: function() { d && d.toggleProgress(!1) },
                        showProgress: showProgress.pbind(s, "", "audio_more_rows"),
                        hideProgress: hideProgress.pbind(s)
                    });
                this._onSectionOut(function() { d.destroy() })
            }
        }, AudioPage.prototype._initSection_recoms = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = t && "" === t.next;

            function s(e) {
                each(e.playlists || [], function(e, t) {
                    if (t) {
                        var i = getAudioPlayer().getPlaylist(t.type, t.ownerId, t.id);
                        i.getAudiosList().length || i.mergeWith(t)
                    }
                })
            }
            if (s(t), vk.id == this.getOwnerId()) {
                var a = new _web_auto_list_auto_list__WEBPACK_IMPORTED_MODULE_11__.default(this._els.recomsBlocks, { onNeedRows: function(e) { i || ajax.post("al_audio.php", { act: "recoms_blocks", offset: t.next }, { onDone: function(a, o) { isArray(a) ? (a = a.filter(e => !!trim(e)), s(o), t.next = o.next, t.next || (i = !0), e(a)) : e(!1) }, onFail: () => !0 }) } });
                this.isLayer() || (cur._back = { loc: "audios" + this.getOwnerId() + "?section=recoms", text: "Recoms" }), this._onSectionOut(() => a.destroy())
            }
        }, AudioPage.prototype._initSection_playlists = function(e, t) {
            var i = geByClass1("_audio_page_block__playlists_items", e);
            i.innerHTML = "";
            var s, a = new _web_auto_list_auto_list__WEBPACK_IMPORTED_MODULE_11__.default(i, {
                uiScroll: this.isLayer(),
                onNeedRows: function(e, t) {
                    for (var i = [], s = this._data.playlists, a = t; a < t + 20 && s[a]; a++) i.push(getTemplate("audio_pl_item", s[a]));
                    e(i)
                }.bind(this)
            });
            this._data.canEdit && (s = new GridSorter(i, "audio_pl_item2", {
                onReorder: function(e, t, i) {
                    var s = domData(e, "raw-id"),
                        a = domData(i, "raw-id");
                    ajax.post("al_audio.php", { act: "reorder_playlist", owner_id: this.getOwnerId(), playlist_id: s.split("_")[1], prev_playlist_id: a ? a.split("_")[1] : 0, hash: this._data.reorderHash }, { onFail: () => !0 })
                }.bind(this)
            }), this._onSectionOut(function() { a.destroy(), s && s.destroy() }))
        }, AudioPage.prototype._initSection_updates = function(e, t) {
            if (uiSearch.init(geByClass1("_audio_friends_search", e)), t.feedPlaylist) {
                var i = getAudioPlayer().getPlaylist(AudioPlaylist.TYPE_FEED, vk.id, 0);
                i.getFeedOffset() || i.mergeWith(t.feedPlaylist);
                var s = e;
                s.innerHTML = "", this._pagePlaylist = i, domData(gpeByClass("_audio_pl", s), "playlist-id", i.getId());
                var a = new _web_auto_list_auto_list__WEBPACK_IMPORTED_MODULE_11__.default(s, { onNeedRows: function(e, t) { i.load(t, function() { e(i.getItemsList().slice(t)) }) } });
                this._onSectionOut(function() { a.destroy() })
            }
        }, AudioPage.prototype._initSection_all = function(e, t, i) {
            var s;
            if (extend(this._els, { audioRows: geByClass1("_audio_page__audio_rows_list", e), audioRowsMore: geByClass1("_audio_more_rows", e), friendsBlock: geByClass1("_audio_friends_list_wrap", e), friendsBlockContent: geByClass1("_audio_friends_list_content", e) }), i) { if (!(s = getAudioPlayer().getCurrentPlaylist()) && !this.retriedCurrent) return this.retriedCurrent = !0, setTimeout(() => this._initSection_all(e, t, i)) } else {
                var a = t.playlistData,
                    o = t.nextFrom;
                a && ((s = getAudioPlayer().getPlaylist(a.type, a.ownerId, a.id)).mergeWith(a), s.getAudiosCount() || s.load()), o && (s.nextFrom = o)
            }
            s && (this._pagePlaylist = s, domData(this._els.audioRows, "playlist-id", s.getId()));
            var l = geByClass1("_audio_friends_search", e);
            if (l && uiSearch.init(l), !this._sortDD && !i) {
                var r = geByClass1("_audio_page__sort_dd", e);
                if (r && isVisible(r)) {
                    var d = getLang("audio_sort_types").split("<br>");
                    this._sortDD = new InlineDropdown(r, {
                        items: [
                            [0, d[0]],
                            ["performer", d[1]],
                            ["random", d[2]],
                            ["reverse", d[3]]
                        ],
                        withArrow: !0,
                        selected: 0,
                        onSelect: this._onSortSelected.bind(this)
                    })
                }
            }
            this._initAudioRowsAutoList(i), this._enableAudioRowsSorter(i), setTimeout(() => this._initFixedFriendsBlock(e))
        }, AudioPage.prototype.drawMore = function() { this._audioRowsAutoList && this._audioRowsAutoList.drawMore() }, AudioPage.prototype.scrollIntoView = function(e, t) { this._scroll.scrollIntoView(e, t) }, AudioPage.prototype._initSection_podcast = function(e, t) {
            extend(this._els, { audioRows: geByClass1("_audio_page__audio_rows_list", e), audioRowsMore: geByClass1("podcast_episodes_more", e) });
            var i = getAudioPlayer().getCurrentPlaylist();
            if (!i) {
                var s = t.playlistData;
                s && ((i = getAudioPlayer().getPlaylist(s.type, s.ownerId, s.id)).getAudiosCount() || (i.mergeWith(s), i.load()))
            }
            i && (this._pagePlaylist = i, domData(this._els.audioRows, "playlist-id", i.getId())), this._initAudioRowsAutoList(), this._data.reverse || this._enableAudioRowsSorter()
        }, AudioPage.prototype.getSortedList = function() { return this._sortedList }, AudioPage.prototype.clearSortedList = function() { this._sortedList = null }, AudioPage.prototype.shuffleAudioPage = function() {
            if (!this.isPodcastPage()) {
                var e = this.getPageCurrentPlaylist(),
                    t = domData(this._els.audioRows, "audio-context");
                e.loadAll(function() {
                    this._sortedList = [].concat(e.getUnshuffledAudiosList()), this._sortedList.fullId = e.getFullId(), shuffle(this._sortedList);
                    var i = new AudioPlaylist(AudioPlaylist.TYPE_TEMP, e.getOwnerId(), e.getAlbumId());
                    i.mergeWith({ list: this._sortedList }), getAudioPlayer().play(i.getAudioAt(0), i, t), this._disableAudioRowsSorter(), this._initAudioRowsAutoList(), this._sortDD && this._sortDD.select("random", !0)
                }.bind(this)), statlogsValueEvent("audio_sort_stat", "audio_sort", "shuffle_page", this.isLayer() ? "layer" : "page")
            }
        }, AudioPage.prototype._onSortSelected = function(e) {
            var t = this.getPageCurrentPlaylist();
            t.loadAll(function() {
                switch (e) {
                    case 0:
                        delete this._sortedList, this._enableAudioRowsSorter(), statlogsValueEvent("audio_sort_stat", "audio_sort", "dropdown_default");
                        break;
                    case "performer":
                        var i = [].concat(t.getUnshuffledAudiosList());
                        i.sort(function(e, t) {
                            var i = trim(e[AudioUtils.AUDIO_ITEM_INDEX_PERFORMER].toLowerCase()),
                                s = trim(t[AudioUtils.AUDIO_ITEM_INDEX_PERFORMER].toLowerCase());
                            return 0 == i.indexOf("the ") && (i = i.slice(4)), 0 == s.indexOf("the ") && (s = s.slice(4)), i < s ? -1 : i > s ? 1 : 0
                        }), this._sortedList = i, this._sortedList.fullId = t.getFullId(), this._disableAudioRowsSorter(), statlogsValueEvent("audio_sort_stat", "audio_sort", "dropdown_performer");
                        break;
                    case "random":
                        this._sortedList = [].concat(t.getUnshuffledAudiosList()), this._sortedList.fullId = t.getFullId(), shuffle(this._sortedList), this._disableAudioRowsSorter(), statlogsValueEvent("audio_sort_stat", "audio_sort", "dropdown_shuffle");
                        break;
                    case "reverse":
                        this._sortedList = [].concat(t.getUnshuffledAudiosList()), this._sortedList.fullId = t.getFullId(), this._sortedList.reverse(), this._disableAudioRowsSorter(), statlogsValueEvent("audio_sort_stat", "audio_sort", "dropdown_reverse")
                }
                this._initAudioRowsAutoList()
            }.bind(this))
        }, AudioPage.prototype._initFixedFriendsBlock = function() {
            if (this._els.friendsBlock) {
                this._isFixed = !1, this._isDraggable = !1, this._initialPos = getXY(this._els.friendsBlock);
                var e = this.isLayer(),
                    t = getSize("page_header")[1],
                    i = getSize(this._els.playerWrap)[1],
                    s = e ? 13 : 15;
                this._fixedThreshold = e ? t + i + s : this._initialPos[1] - t - i - s;
                var a = e ? this._scroll.scroller : window;
                if (!(this._fixedThreshold < 0)) {
                    addEvent(window, "resize", this._resizeHandler = () => { this._initialPos = getXY(this._els.friendsBlock) }), addEvent(a, "scroll", this._scrollHandler = () => { this._moveFriendsBlock() });
                    var o = this;
                    AudioPage.onUpdateDraggablePosition = () => { o._isDraggable = !0, o._moveFriendsBlock(), requestAnimationFrame(() => o._isDraggable = !1) }, AudioPage.forceFix = () => {
                        var e = o._els.friendsBlockContent.getBoundingClientRect();
                        if (e.width > 0 && e.height > 0) {
                            var t = o.isLayer() ? o._scroll.scroller.scrollTop : scrollGetY();
                            o._els.friendsBlockContent.style.transform = `translate(0,${Math.max(0, t - o._fixedThreshold - 9)}px)`, o._unfixedFriendsBlock()
                        }
                    }, this._onSectionOut(() => { this._scrollHandler && removeEvent(a, "scroll", this._scrollHandler), this._resizeHandler && removeEvent(window, "resize", this._resizeHandler), this._fixedBlockScrollHandler && removeEvent(this._els.friendsBlockContent, "mousewheel", this._fixedBlockScrollHandler), removeClass(this._els.friendsBlockContent, "audio_friends_fixed") })
                }
            }
        }, AudioPage.prototype._moveFriendsBlock = function() {
            var e = this.isLayer() ? this._scroll.scroller.scrollTop : scrollGetY(),
                t = this._els.friendsBlockContent.getBoundingClientRect(),
                i = t.width > 0 && t.height > 0;
            this._isDraggable && i ? (this._els.friendsBlockContent.style.transform = `translate(0,${Math.max(0, e - this._fixedThreshold - 9)}px)`, this._unfixedFriendsBlock()) : (this._els.friendsBlockContent.style.transform = "", e > this._fixedThreshold ? this._fixedFriendsBlock() : this._unfixedFriendsBlock())
        }, AudioPage.prototype._fixedFriendsBlock = function() { this._isFixed || (this._initialPos = getXY(this._els.friendsBlock), addClass(this._els.friendsBlockContent, "audio_friends_fixed"), this._isFixed = !0, this.isLayer() && (this._fixedBlockScrollHandler = addEvent(this._els.friendsBlockContent, "mousewheel", e => (this._scroll.scroller.scrollTop = this._scroll.scroller.scrollTop + e.deltaY, cancelEvent(e))))) }, AudioPage.prototype._unfixedFriendsBlock = function() { this._isFixed && (removeClass(this._els.friendsBlockContent, "audio_friends_fixed"), this._isFixed = !1, this._fixedBlockScrollHandler && removeEvent(this._els.friendsBlockContent, "mousewheel", this._fixedBlockScrollHandler)) }, AudioPage.prototype.playPlaylist = function(e, t, i, s) {
            var a = getAudioPlayer(),
                o = a.getCurrentPlaylist(),
                l = a.getPlaylist(e, t, i);
            o && o.equals(l) && a.isPlaying() ? a.pause() : l.load(0, function() { a.play(l.getAudiosList()[0], l, s) })
        }, AudioPage.prototype.playBannerBlockPlaylist = function(e, t) {
            var i = gpeByClass("_audio_pl", t);
            this.playBlockPlaylist(e, function(e) { i.classList.add(`_audio_pl_${e.getOwnerId()}_${e.getAlbumId()}`) })
        }, AudioPage.prototype.playShuffledBlockPlaylist = function(e) {
            var t = getAudioPlayer(),
                i = t.getPlaylistByBlockId(e);
            i.clean(), i.loadByBlockId("", function(e) { t.play(e.getAudiosList()[0], e, e.getContext()) })
        }, AudioPage.prototype.playBlockPlaylist = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                i = getAudioPlayer(),
                s = i.getCurrentPlaylist(),
                a = i.getPlaylistByBlockId(e);
            s && s.equals(a) && i.isPlaying() ? i.pause() : a.loadByBlockId("", function(e) { t && "function" == typeof t && t(e), i.play(e.getAudiosList()[0], e, e.getContext()) })
        }, AudioPage.prototype._enableAudioRowsSorter = function(e) {
            (this._data.audiosReorderHash || e) && (this._audioRowsSorter && this._audioRowsSorter.destroy(), this._audioRowsSorter = new GridSorter(this._els.audioRows, "", {
                wrapNode: this.isLayer() ? this._scroll.scroller : void 0,
                onReorder: function(t, i, s) {
                    var a, o = getAudioPlayer(),
                        l = domData(t, "full-id"),
                        r = domData(s, "full-id"),
                        d = e ? o.getCurrentPlaylist() : this.getPageCurrentPlaylist(),
                        n = d.indexOfAudio(l);
                    r ? (a = d.indexOfAudio(r), a += 1) : a = 0, d.moveAudio(n, a), e && o.saveStateCurrentPlaylist(), this.isPodcastPage() ? ajax.post("al_podcasts.php", { act: "a_reorder_episodes", hash: this._data.audiosReorderHash, oid: this.getOwnerId(), episode_id: l ? l.split("_")[1] : 0, next_episode_id: r ? r.split("_")[1] : 0 }, { onFail: () => !0 }) : e || ajax.post("al_audio.php", { act: "reorder_audios", hash: this._data.audiosReorderHash, owner_id: this.getOwnerId(), audio_id: l ? l.split("_")[1] : 0, next_audio_id: r ? r.split("_")[1] : 0 }, { onFail: () => !0 })
                }.bind(this)
            }), this._onSectionOut(function() { this._audioRowsSorter && this._audioRowsSorter.destroy() }.bind(this)))
        }, AudioPage.prototype._disableAudioRowsSorter = function() { this._audioRowsSorter && this._audioRowsSorter.disable() }, AudioPage.prototype._initAudioRowsAutoList = function(e) {
            if (this._els.audioRows) {
                var t = this.isPodcastPage() || "podcast" === this._currentSection,
                    i = this._pagePlaylist;
                this._els.audioRows.innerHTML = "", toggleClass(this._els.audioRows, "audio_owner_list_canedit", !t && !!this._data.canEdit), this._audioRowsAutoList && this._audioRowsAutoList.destroy(), this._audioRowsAutoList = new _web_auto_list_auto_list__WEBPACK_IMPORTED_MODULE_11__.default(this._els.audioRows, {
                    scrollNode: !!this._scroll && this._scroll.scroller,
                    onRendered: function() { getAudioPlayer().updateCurrentPlaying() },
                    onNoMore: function() { hide(this._els.audioRowsMore) }.bind(this),
                    onNeedRows: function(s, a, o, l, r) {
                        var d = [];
                        t ? (lockButton(this._els.audioRowsMore), this._loadPodcastEpisodes(a, function(e) {
                            (e || []).slice(a).forEach(function(e) { d.push(AudioUtils.drawAudio(e)) }), unlockButton(this._els.audioRowsMore), s(d)
                        }.bind(this))) : i && i.load(a, () => {
                            var t = [];
                            t = e ? i.getAudiosList() : this._sortedList && this._sortedList.fullId === i.getFullId() ? this._sortedList : i.getUnshuffledAudiosList();
                            for (var o = a; o < a + 30 && t[o]; o++) d.push(AudioUtils.drawAudio(t[o]));
                            s(d), 0 === a && this._audioRowsSorter && this._audioRowsSorter.update(), 0 === a && 1 === d.length && r.drawMore()
                        })
                    }.bind(this)
                }), this._onSectionOut(function() { this._audioRowsAutoList.destroy(), this._els.audioRows.innerHTML = "" }.bind(this))
            }
        }, AudioPage.prototype._loadPodcastEpisodes = function(e, t) {
            var i, s = getAudioPlayer().getCurrentAudio() || this._readyAudio;
            i = this.isPodcastPage() ? this._ownerId : s[AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID], cur._podcastsEpisodes = cur._podcastsEpisodes || {}, cur._podcastsEpisodes[i] = cur._podcastsEpisodes[i] || [];
            var a = cur._podcastsEpisodes[i];
            a.length && e < a.length ? t(a) : ajax.post("al_podcasts.php", { act: "a_episodes", oid: i, episode_full_id: s ? s[AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] + "_" + s[AudioUtils.AUDIO_ITEM_INDEX_ID] : "", offset: e, rev: this._data.reverse }, { onDone: function(e) { cur._podcastsEpisodes[i] = a.concat(e || []), t(cur._podcastsEpisodes[i]) }, onFail: function() { return t(cur._podcastsEpisodes[i]), !0 } })
        }, AudioPage.showAttachBox = function(e, t) { 1 === vk.widget ? showBox("al_audio.php", { act: "choose_box", owner_id: e, options: JSON.stringify(t) }) : AudioPage.editPlaylist(e, AudioPlaylist.DEFAULT_PLAYLIST_ID, "attach", t) }, AudioPage.editPlaylist = function(e, t, i, s) {
            if (vk.widget)
                for (var a in s) s.hasOwnProperty(a) && (isString(s[a]) ? s[a] = clean(s[a]) : isFunction(s[a]) ? delete s[a] : s[a] = intval(s[a]));
            var o, l;
            if ("edit" === i && s && (s.audioAttachSwitchOwnerId = !1), s && s.audioAttachSwitchOwnerId && (cur.audioAttachSwitchOwnerId = s.audioAttachSwitchOwnerId), i = i || "edit", t) o = getAudioPlayer().getPlaylist(AudioPlaylist.TYPE_PLAYLIST, e, t);
            else if (cur.audioPage) { var r = cur.audioPage._data.maxPlaylistsCount; if (isArray(cur.audioPage._data.playlists) && cur.audioPage._data.playlists.length >= r) { var d = langNumeric(r, cur.lang.audio_playlists_limit_error).replace("{limit}", r); return void new MessageBox({ title: getLang("global_error") }).content(d).setButtons("Ok", function() { curBox().hide() }).show() } }
            show(boxLoader), show(boxLayerWrap), boxRefreshCoords(boxLoader), window.performanceStart && window.performanceStart("audio_attaching_opening", [e, t], !0), parallel(function(e) { stManager.add(["audio.css", jsc("web/indexer.js"), jsc("web/auto_list.js"), jsc("web/grid_sorter.js"), "edit" === i && "upload.js"], e) }, function(e) { o ? o.loadAll(e) : e() }, function(t) { cur.audioPage && cur.audioPage.getOwnerId() == e && (l = cur.audioPage.getOwnerPlaylists()), l ? t() : AudioPage.loadPlaylists(e, void 0, !1, "attach" === i, function(e) { l = e, t() }) }, function() { AudioPage._openEditPlaylist(i, e, t, l, s) })
        }, AudioPage._openEditPlaylist = function(e, t, i, s, a) {
            var o;
            hide(boxLoader), curBox() || hide(boxLayerWrap), window.performanceEnd && window.performanceEnd("audio_attaching_opening", [t, i], !1), cur.apLayer && (o = cur.apLayerPlaylistId, layers.fullhide()), a = extend({ audioPickerButtonText: getLang("global_add_media"), playlistPickerButtonText: getLang("audio_attach_playlist_button"), canPlaylistAttach: !1, onAudioChoose: AudioUtils.onAudioChoose, onPlaylistChoose: AudioUtils.onPlaylistChoose }, a), cur.onChooseAudio = a.onAudioChoose, cur.onChoosePlaylist = a.onPlaylistChoose;
            var l, r = !i || i == AudioPlaylist.DEFAULT_PLAYLIST_ID,
                d = getAudioPlayer(),
                n = !1,
                _ = !1,
                u = !1,
                c = !1,
                h = !1,
                p = !1,
                g = 0,
                y = null;
            s = s.filter(function(e) { return e.id !== AudioPlaylist.DEFAULT_PLAYLIST_ID && e.size > 0 });
            var P, A = new vkIndexer(s, function(e) { return e.title }),
                f = s.length > 0,
                v = !1,
                w = d.getPlaylist(AudioPlaylist.TYPE_TEMP, t, irand(0, 999999));
            if (r && "attach" != e ? a.addAudio && w.addAudio(a.addAudio) : (v = d.getPlaylist(AudioPlaylist.TYPE_PLAYLIST, t, i), w.addAudio(v.getUnshuffledAudiosList()), w.mergeWith({ title: v.getTitle(), description: v.getDescription(), rawDescription: v.getRawDescription(), coverUrl: v.getCoverUrl(), editHash: v.getEditHash() })), P = "attach" === e ? getLang("audio_choose_audio_title") : i ? getLang("audio_edit_playlist_title") : getLang("audio_new_playlist_title"), (2 === vk.widget || 3 === vk.widget) && window.box && !boxQueue.count() && !curBox()) {
                (m = window.box).setOptions({ title: P, bodyStyle: "padding: 0", width: 560, onBeforeHide: E, onHideAttempt: L, hideButtons: !0 })
            } else {
                cur.audioChooseBox && cur.audioChooseBox == curBox() && curBox().hide();
                var m = new MessageBox({ title: P, bodyStyle: "padding: 0", width: 560, onBeforeHide: E, onHideAttempt: L });
                cur.audioChooseBox = m
            }
            m.content(getTemplate("audio_edit_playlist")), m.show();
            var C = { boxContent: geByClass1("_audio_pl_edit_box", m.bodyNode), playlistNameInput: geByClass1("ape_pl_input", geByClass1("ape_pl_title", m.bodyNode)), playlistDescriptionInput: geByClass1("ape_pl_input", geByClass1("ape_pl_description", m.bodyNode)), stat: geByClass1("_ape_pl_stat", m.bodyNode), uploadCoverButton: geByClass1("_ape_cover", m.bodyNode), uploadCoverInput: geByClass1("_ape_cover_upload", m.bodyNode), errorMsg: geByClass1("_ape_error_msg", m.bodyNode), header: geByClass1("_ape_header", m.bodyNode), search: geByClass1("_ape_search", m.bodyNode), searchInput: geByClass1("_field", m.bodyNode), addAudiosButton: geByClass1("ape_add_audios_btn", m.bodyNode), addAudiosFromPlaylistsButton: geByClass1("ape_add_pl_audios_btn", m.bodyNode), listWrap: geByClass1("_ape_list_wrap", m.bodyNode), list: geByClass1("_ape_item_list", m.bodyNode), globalResults: geByClass1("_ape_item_global_results", m.bodyNode), globalResultsList: geByClass1("_ape_item_global_list", m.bodyNode), emptyPlaceholder: geByClass1("_ape_audios_empty_list", m.bodyNode), emptyPlaylistsPlaceholder: geByClass1("_ape_audios_empty_playlists_list", m.bodyNode), emptyGlobalPlaceholder: geByClass1("_ape_audios_empty_global_list", m.bodyNode) };

            function b(e) {
                if (e = trim(e)) {
                    var t = " " + (e + "|") + (parseLatin(e) || "") + (parseCyr(e) || "");
                    t = trim(t.replace(/\)/g, "").replace(/&/, "&amp;")), p = new RegExp("(\\s|^)(" + t.replace(vkIndexer.delimiter, "|").replace(/(^\||\|$|\?)/g, "") + ")", "gi")
                } else p = !1;
                O(c, "playlists" !== u, e), hide(C.emptyGlobalPlaceholder)
            }

            function E() { w.clean(), d.deletePlaylist(w), o && AudioUtils.showAudioPlaylist(o[0], o[1]) }

            function L(t) { return !(!t && "attach" !== e && !i) || (showFastBox(getLang("global_warning"), getLang("audio_new_playlist_remove_confirm_text"), getLang("audio_new_playlist_remove_confirm_continue"), function() { curBox().hide(), m.hide(!0) }, getLang("global_cancel")), !1) }

            function S() { return trim(C.searchInput.value) }

            function B(t) {
                var i = w.indexOfAudio(t) >= 0 ? "ape_selected" : "",
                    s = t;
                p && ((t = clone(s))[AudioUtils.AUDIO_ITEM_INDEX_TITLE] = t[AudioUtils.AUDIO_ITEM_INDEX_TITLE].replace(p, "$1<em>$2</em>"), t[AudioUtils.AUDIO_ITEM_INDEX_PERFORMER] = t[AudioUtils.AUDIO_ITEM_INDEX_PERFORMER].replace(p, "$1<em>$2</em>"));
                var o = "";
                if ("edit" == e) o = '<div class="ape_check"><div class="ape_check_icon"></div></div>';
                else {
                    var l = AudioUtils.asObject(s);
                    if (a && a.wiki) o = '<div role="button" class="ape_attach" onclick="' + ("editorChooseAudio('" + clean(l.performer) + "', '" + clean(l.title) + "', " + l.duration + ", '" + l.fullId + "', '" + l.url + "', " + l.duration + ", this)") + '">' + a.audioPickerButtonText + "</div>";
                    else o = `<div role="button" class="ape_attach" onclick="cur.onChooseAudio(event, this, ${l = clean(JSON.stringify(l))}, ${clean(JSON.stringify(s))})">${a.audioPickerButtonText}</div>`
                }
                return '<div class="ape_audio_item_wrap _ape_audio_item ' + i + '">' + o + AudioUtils.drawAudio(t) + "</div>"
            }! function() {
                var i = window.innerHeight;
                setStyle(C.boxContent, "height", Math.min(800, Math.max(i - 200, 500))), addEvent(C.addAudiosFromPlaylistsButton, "click", R.bind(this, "playlists")), addEvent(C.addAudiosButton, "click", R.bind(this, "default")), addEvent(C.list, "click", F), "attach" == e && domData(C.list, "audio-context", "attach");
                addEvent(m.titleWrap, "click", function(e) {
                    hasClass(e.target, "_back") && function() {
                        switch (u) {
                            case "initial":
                                break;
                            case "default":
                                R("initial");
                                break;
                            case "playlists":
                                R("default");
                                break;
                            case "playlist":
                                R("playlists")
                        }
                    }()
                }), uiSearch.init("ape_edit_playlist_search", { onChange: b }), "edit" == e && (R("initial"), H(), function() {
                    if (!cur.audioCoverUploadOptions || !cur.audioCoverUploadOptions[t]) return;
                    var e = cur.audioCoverUploadOptions[t],
                        i = {
                            file_name: "photo",
                            file_size_limit: 5242880,
                            file_types_description: "Image files (*.jpg, *.jpeg, *.png, *.gif)",
                            file_types: "*.jpg;*.JPG;*.jpeg;*.JPEG;*.png;*.PNG;*.gif;*.GIF;*.bmp;*.BMP",
                            onUploadStart: function(e, t) { show(geByClass1("_ape_cover_progress")) },
                            onUploadComplete: function(e, t) {
                                (t = JSON.parse(t)).error ? (show(C.errorMsg), D()) : (hide(C.errorMsg), j((g = t).url), D()), hide(geByClass1("_ape_cover_progress"))
                            },
                            onUploadProgress: function(e, t, i) {},
                            onUploadError: function(e, t) { hide(geByClass1("_ape_cover_progress")) },
                            clear: 1,
                            type: "photo",
                            max_attempts: 3,
                            server: e.server,
                            noCheck: !0,
                            chooseBox: !0,
                            uploadButton: !0,
                            accept: ".jpg,.jpeg,.png",
                            filesize_hide_last: !0,
                            label: e.button
                        };
                    Upload.init(C.uploadCoverButton, e.url, e.vars, i), addEvent(geByClass1("_ape_cover_delete"), "click", W), addEvent(C.uploadCoverButton, "click", function() { isObject(g) && !isVisible(geByClass1("_ape_cover_progress")) || geByTag1("input", this).click() }), C.coverThumb = geByClass1("_ape_cover_thumb")
                }(), w.getCoverUrl() && j(w.getCoverUrl()), autosizeSetup(C.playlistDescriptionInput, { minHeight: 30, maxHeight: 150, onResize: D }), C.playlistNameInput.value = replaceEntities(w.getTitle()), C.playlistDescriptionInput.value = replaceEntities(w.getRawDescription().replace(/<br>/g, "\n")));
                "attach" == e && R("default");
                k(), v && "attach" != e && m.setControlsText('<a onclick="AudioPage.deletePlaylist(' + v.getOwnerId() + ", " + v.getPlaylistId() + ", '" + v.getEditHash() + "')\">" + getLang("audio_delete_playlist") + "</a>")
            }(m.bodyNode);
            var I = 0;

            function T() { m.setOptions({ title: '<div class="back _back">' + getLang("global_back") + "</div>", bodyStyle: "padding: 0" }) }

            function k() {
                var e = "";
                cur.audioAttachSwitchOwnerId && cur.audioAttachOriginalOwnerId && (e = '<span class="dvd"></span><a class="tab_link" onclick="cur.audioAttachSwitch()">', e += getLang(w.getOwnerId() < 0 ? "audio_choose_wall_to_my_audios" : "audio_choose_wall_to_group_audios"), w.getOwnerId() === cur.audioAttachOriginalOwnerId ? cur.audioAttachSwitch = function() { AudioPage.showAttachBox(cur.audioAttachSwitchOwnerId, a) } : cur.audioAttachSwitch = function() { AudioPage.showAttachBox(cur.audioAttachOriginalOwnerId, a) }, e += "</a>"), m.setOptions({ title: P + e, bodyStyle: "padding: 0" })
            }

            function D() { setStyle(C.list, { height: getSize(C.boxContent)[1] - (getXY(C.list)[1] - getXY(C.boxContent)[1]) }) }

            function O(e, t, i) { c = e, t ? i ? e.search({ q: i }, function(e) { x(!0, e) }) : x(!0, e.getUnshuffledAudiosList()) : x(!1, i ? A.search(i) : s), M("initial" == u && !i) }

            function x(e, t) {
                C.list.innerHTML = "", n && n.destroy(), show(C.list), hide(C.emptyPlaceholder), hide(C.emptyGlobalPlaceholder), hide(C.emptyPlaylistsPlaceholder), D();
                var i = 0;
                n = new _web_auto_list_auto_list__WEBPACK_IMPORTED_MODULE_11__.default(C.list, {
                    scrollNode: C.list,
                    onNoMore: function() {
                        0 === i && (S() ? e || (hide(C.list), show(C.emptyPlaylistsPlaceholder)) : (hide(C.list), show(C.emptyPlaceholder))), e && (clearTimeout(I), S() && (I = setTimeout(function() {
                            I = !1;
                            var e = S();
                            if (e) {
                                (h = d.getPlaylist(AudioPlaylist.TYPE_SEARCH, vk.id, hashCode(e + "no conflict"))).mergeWith({ searchParams: { globalQuery: e }, hasMore: !0 }), _ && _.destroy();
                                var t = 0;
                                n && (t = n.getOffset(), n.destroy()), (n = new _web_auto_list_auto_list__WEBPACK_IMPORTED_MODULE_11__.default(C.list, {
                                    scrollNode: C.list,
                                    onNeedRows: function(e, i) {
                                        i -= t, h.load(i, function() {
                                            var t = [],
                                                s = h.getAudiosList();
                                            if (0 == i && s.length && t.push('<div class="ape_list_header">' + getLang("audio_edit_playlist_global_results") + "<div>"), s.length)
                                                for (var a = Math.min(s.length, i + 20), o = i; o < a; o++) t.push(B(s[o]));
                                            h.getAudiosCount() || n && n._offset ? (hide(C.emptyGlobalPlaceholder), show(C.list)) : (show(C.emptyGlobalPlaceholder), hide(C.list)), e(t)
                                        })
                                    }
                                })).drawMore()
                            }
                        }, 300), y = null))
                    },
                    onNeedRows: function(s, a) {
                        for (var o = [], l = Math.min(t.length, a + 20), r = a; r < l; r++) {
                            var d, n = t[r];
                            if (e) d = B(n);
                            else {
                                var _ = '<div class="ape_pl_item_inner"><span class="ape_pl_title">' + (p ? n.title.replace(p, "$1<em>$2</em>") : n.title) + '</span> <span class="ape_pl_size">' + langNumeric(n.size, cur.lang.audio_playlist_audios_count, !0).replace("{count}", n.size) + "</span></div>";
                                d = '<div class="ape_pl_item" data-playlist-access-hash="' + n.access_hash + '"  data-playlist-owner-id="' + n.owner_id + '" data-playlist-id="' + n.id + '">' + _ + "</div>"
                            }
                            o.push(d)
                        }
                        i += o.length, s(o)
                    }
                })
            }

            function M(e) {
                l || (l = new GridSorter(C.list, "ape_audio_item_wrap", {
                    wrapNode: C.list,
                    onReorder: function(e, t) {
                        var i, s = domData(geByClass1("_audio_row", e), "full-id"),
                            a = w.indexOfAudio(s);
                        t ? (s = domData(geByClass1("_audio_row", t), "full-id"), i = w.indexOfAudio(s)) : i = w.getAudiosCount(), w.moveAudio(a, i)
                    }
                })), e ? l.enable() : l.disable()
            }

            function R(i, o) {
                if ("default" === i && cur.audioPage && cur.audioPage._data.addBanned) showFastBox({ title: getLang("global_error") }, cur.audioPage._data.addBannedText);
                else {
                    switch (u = i, m.removeButtons(), domData(C.list, "view", i), i) {
                        case "initial":
                            show(C.header), hide(C.addAudiosFromPlaylistsButton), show(C.addAudiosButton), show(C.search), hide(C.globalResults), O(w, !0), U(), k();
                            break;
                        case "default":
                            var l = d.getPlaylist(AudioPlaylist.TYPE_PLAYLIST, t, AudioPlaylist.DEFAULT_PLAYLIST_ID);
                            disableEl(C.addAudiosButton), showProgress(C.addAudiosButton), l.load(function() { enableEl(C.addAudiosButton), hideProgress(C.addAudiosButton), hide(C.header), show(C.search), toggle(C.addAudiosFromPlaylistsButton, f), hide(C.addAudiosButton), "edit" == e ? T() : k(), O(l, !0), D(), "edit" == e && U() });
                            break;
                        case "playlists":
                            hide(C.header), show(C.search), hide(C.addAudiosFromPlaylistsButton), hide(C.addAudiosButton), hide(C.globalResults), T(), O(s);
                            break;
                        case "playlist":
                            hide(C.header), show(C.search), hide(C.addAudiosFromPlaylistsButton), hide(C.addAudiosButton), T(), O(o, !0), "attach" == e && function(e) {
                                if (!a.canPlaylistAttach) return;
                                m.addButton(a.playlistPickerButtonText, function(t) { cur.onChoosePlaylist(t, e) }, "ok", !0)
                            }(o), "edit" == e && U()
                    }
                    D(), C.searchInput.value = "", elfocus(C.searchInput), p = !1, y = null, clearTimeout(I), d && d.updateCurrentPlaying && d.updateCurrentPlaying()
                }
            }

            function U() { m.addButton(getLang("audio_save_playlist_button"), N, "ok", !0) }

            function F(t) {
                var i;
                if (i = domClosest("ape_pl_item", t.target)) {
                    var s = domData(i, "playlist-id"),
                        a = domData(i, "playlist-owner-id"),
                        o = domData(i, "playlist-access-hash"),
                        l = d.getPlaylist(AudioPlaylist.TYPE_PLAYLIST, a, s, o);
                    showProgress(i), l.load(function() { hideProgress(i), R("playlist", l) })
                }
                if (hasClass(t.target, "ape_check")) {
                    function r(e, t) {
                        if (cur.audioPage && cur.audioPage._data.addBanned) showFastBox({ title: getLang("global_error") }, cur.audioPage._data.addBannedText);
                        else {
                            var i = toggleClass(e, "ape_selected", t),
                                s = geByClass1("_audio_row", e),
                                a = AudioUtils.getAudioFromEl(s);
                            i ? w.addAudio(a, 0) : w.removeAudio(a)
                        }
                    }
                    var n = domClosest("_ape_audio_item", t.target);
                    if (t.shiftKey && y) {
                        var _ = domChildIndex(y),
                            u = domChildIndex(n),
                            c = domPN(n);
                        if (_ > u) {
                            var h = u;
                            u = _, _ = h
                        }
                        for (var p = hasClass(y, "ape_selected"), g = _; g <= u; g++) r(c.children[g], p)
                    } else r(n), y = n;
                    H()
                }
                if ("attach" === e && hasClass(t.target, "artist_link")) {
                    if (t.metaKey && browser.mac || t.ctrlKey) return;
                    var P = domData(t.target, "performer") || trim(t.target.innerText);
                    P && (val(C.searchInput, P), uiSearch.onChanged(C.searchInput), b(P))
                }
                return cancelEvent(t)
            }

            function H() {
                var e, t = w.getAudiosCount(),
                    i = w.getTotalDuration();
                if (t) {
                    e = (e = langNumeric(t, cur.lang.audio_edit_playlist_audios_info)).replace("{count}", t);
                    var s = "",
                        a = i % 60,
                        o = Math.floor(i / 60) % 60,
                        l = Math.floor(i / 3600);
                    i < 60 ? s = langNumeric(i, cur.lang.audio_total_dur_seconds) : i < 3600 ? (s = langNumeric(o, cur.lang.audio_total_dur_minutes), a && (s += " " + langNumeric(a, cur.lang.audio_total_dur_seconds))) : (s = langNumeric(l, cur.lang.audio_total_dur_hours), o && (s += " " + langNumeric(o, cur.lang.audio_total_dur_minutes))), e += '<span class="dvd">' + s + "</span>"
                } else e = getLang("audio_edit_playlist_no_audios");
                C.stat.innerHTML = e
            }

            function N(e) {
                var i = trim(val(C.playlistNameInput)),
                    s = trim(val(C.playlistDescriptionInput));
                if (!i) return R("initial"), void notaBene(ge("ape_pl_name"));
                var o = [];
                each(w.getUnshuffledAudiosList(), function(e, t) { o.push(t[AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] + "_" + t[AudioUtils.AUDIO_ITEM_INDEX_ID]) });
                var l = a.newPlaylistHash || cur.audioPage && cur.audioPage._data.newPlaylistHash || "";
                ajax.post("al_audio.php?act=save_playlist", { hash: r ? l : v.getEditHash(), owner_id: t, playlist_id: r ? 0 : v.getPlaylistId(), title: i, description: s, Audios: o.join(","), cover: isObject(g) ? JSON.stringify(g) : g }, {
                    showProgress: lockButton.bind(this, e),
                    onDone: function(e, i) {
                        each(geByClass("_audio_pl_" + e.ownerId + "_" + e.id), function() {
                            var t = geByClass1("audio_pl__cover", this);
                            if (t) {
                                setStyle(t, "background-image", e.coverUrl ? "url(" + e.coverUrl + ")" : null), setStyle(t, "background-size", e.coverUrl ? "cover" : null);
                                var i = geByClass1("_audio_pl_grid_covers_wrap", this);
                                i && (i.innerHTML = e.coverUrl ? "" : e.gridCovers)
                            }
                            var s = geByClass1("audio_pl__title", this);
                            if (s) {
                                var a = geByClass1("audio_item__title", s);
                                a ? val(a, e.title) : val(s, e.title)
                            }
                            var o = geByClass1("_audio_pl__stats_count", this);
                            o && (o.innerHTML = e.totalCount)
                        }), r && cur.audioPage && t == cur.audioPage.getOwnerId() && (each(geByClass("_audio_page_block__playlists_items", cur.audioPage._els.pageContainer), function() {
                            var e = se(getTemplate("audio_pl_item", i));
                            this.insertBefore(e, this.firstChild);
                            var t = intval(domData(this, "max-items"));
                            t && this.children.length > t && this.removeChild(this.lastChild), show(gpeByClass("_audio_page__playlists", this))
                        }), cur.audioPage._data.playlists = cur.audioPage._data.playlists || [], cur.audioPage._data.playlists.unshift(i)), cur.audioPage && cur.audioPage.updatePlaylistsCounter && cur.audioPage.updatePlaylistsCounter(t), v && (v.clean(), v.mergeWith(e)), m.hide(!0)
                    },
                    onFail: () => (m.hide(!0), !0)
                })
            }

            function j(e) { show(C.coverThumb), setStyle(C.coverThumb, "background-image", "url(" + e + ")"), addClass(C.uploadCoverButton, "ape_thumb_set") }

            function W(e) { return removeClass(C.uploadCoverButton, "ape_thumb_set"), hide(geByClass1("_ape_cover_thumb")), g = -1, cancelEvent(e) }
        }, AudioPage._buildAudiosAndPlaylistsList = function() {}, AudioPage.prototype.updateSearchUrl = function() {
            var e = this.getCurrentPlaylist();
            if (e.getType() == AudioPlaylist.TYPE_SEARCH && !this.isLayer()) {
                var t = e.getSearchParams();
                nav.setLoc(extend(nav.objLoc, { q: t.q }))
            }
        }, AudioPage.prototype._deinitKeyEvents = function() { this._audioHQKeyEventHandler1 && removeEvent(window.document, "keydown", this._audioHQKeyEventHandler1), this._audioHQKeyEventHandler2 && removeEvent(window.document, "keyup", this._audioHQKeyEventHandler2), this._audioHQKeyEventHandler3 && removeEvent(window.document, "visibilitychange", this._audioHQKeyEventHandler3), this._audioHQKeyEventHandler4 && removeEvent(window.document, "mousedown", this._audioHQKeyEventHandler4), this._audioSeekKeyEventHandler && removeEvent(window.document, "keydown", this._audioSeekKeyEventHandler) }, AudioPage.prototype._initKeyEvents = function() {
            this._deinitKeyEvents();
            var e = getAudioPlayer(),
                t = () => !this.isLayer() && AudioUtils.getLayer().isShown();
            addEvent(window.document, "mousedown", this._audioHQKeyEventHandler4 = function(e) { e.ctrlKey && (cur.ctrlMouseDown = !0, cur.ctrlPressed = !1) }, !0), addEvent(window.document, "keydown", this._audioHQKeyEventHandler1 = function(e) { t() || (cur.ctrlPressed = e.keyCode === KEY.CTRL) }), addEvent(window.document, "keyup", this._audioHQKeyEventHandler2 = function(e) { t() || (e.keyCode !== KEY.CTRL || cur.ctrlMouseDown) && (delete cur.ctrlMouseDown, delete cur.ctrlPressed) }), addEvent(window.document, "keydown", this._audioSeekKeyEventHandler = function(i) {
                var s = i.target,
                    a = s && inArray(s.tagName.toLowerCase(), ["input", "textarea"]) && "" !== val(s),
                    o = s && s.isContentEditable,
                    l = cur && cur.pvShown;
                a || o || l || !t() && e.isPlaying() && inArray(i.keyCode, [KEY.RIGHT, KEY.LEFT]) && !i.ctrlKey && e.seekCurrentAudio(i.keyCode === KEY.RIGHT)
            }), cur.destroy.push(() => this._deinitKeyEvents())
        }, AudioPage.prototype.editFeed = function() {
            var e = this;
            showTabbedBox("al_settings.php", { act: "a_edit_owners_list", list: "audio", height: lastWindowHeight }, { stat: [jsc("web/privacy.js"), "privacy.css", "ui_controls.js", "ui_controls.css", jsc("web/indexer.js")], dark: 1 }), cur.onOListSave = function(t, i, s, a) {
                var o = curBox(),
                    l = { act: "a_ignore_olist", hash: a.hash };
                return t.length < i.length ? l.White = t.join(",") : l.Black = i.join(","), ajax.post("al_audio.php", l, { onDone: function(t, i) { o.hide(), e.getCurrentPlaylist().clean(), e.refreshCurrentPage() }, onFail: () => !0, showProgress: o.showProgress, hiderogress: o.hideProgress }), !1
            }
        }, AudioPage.prototype.updateStatusExportControls = function(e) {
            var t = getAudioPlayer(),
                i = t.getStatusExportInfo();
            each(geByClass("_audio_export_status", this._els.pageContainer), function() { toggleClass(this, "on", i && !!i[domData(this, "oid")]) });
            var s = t.hasStatusExport(),
                a = geByClass1("_audio_page_player_status", this._els.pageContainer);
            if (toggleClass(a, "audio_page_player_btn_enabled", s), !e)
                if (this.isLayer()) cur.audioPage && cur.audioPage.updateStatusExportControls(!0);
                else {
                    var o = AudioUtils.getLayer().getPageInstance();
                    o && o.updateStatusExportControls(!0)
                }
            return !1
        }, AudioPage.prototype.updateStatusExport = function(e, t) {
            e && checkbox(e), t = intval(t);
            var i, s, a = getAudioPlayer(),
                o = a.getStatusExportInfo() || {};
            if (t) o[t] ? (delete o[t], i = !1) : (o[t] = 1, i = !0);
            else if (a.hasStatusExport()) {
                for (var l in o) delete o[l];
                i = !1
            } else o[t = vk.id] = 1, i = !0;
            a.setStatusExportInfo(o), t != vk.id && t || checkbox("currinfo_audio", a.hasStatusExport()), this.updateStatusExportControls();
            var r = a.getCurrentAudio();
            r && (s = AudioUtils.asObject(r).fullId);
            a.getCurrentPlaylist();
            ajax.post("al_audio.php", { act: "toggle_status", exp: intval(i), oid: t, hash: vk.statusExportHash, id: s, top: intval(null) }, { onFail: () => !0 })
        }, AudioPage.prototype.playStatusAudio = function(e, t, i) {
            var s = gpeByClass("_audio_friend", i);
            getAudioPlayer().playLive(e, { showProgress: showProgress.pbind(s), hideProgress: hideProgress.pbind(s) }), cancelEvent(t)
        }, AudioPage.showActionTooltip = function(e, t) {
            var i = [3, -8, 0],
                s = currentAudioPage(e),
                a = s && s.isLayer();
            hasClass(e, "_audio_page_player_add") ? audioShowActionTooltip(e, i, a) : (hasClass(e, "_audio_page_player_play_rate") && (i[0] = -17), showTooltip(e, { text: t, black: 1, shift: i, appendParentCls: "_audio_page_player", forcetodown: a, needLeft: a }))
        }, AudioPage.prototype.onHide = function() {
            var e = this;
            cur.nav = cur.nav.filter(function(t) { return e._nav_func != t }), this._deinitKeyEvents()
        }, AudioPage.prototype.showRecoms = function(e, t, i) {
            if (!t) {
                var s = this._readyAudio ? this._readyAudio : getAudioPlayer().getCurrentAudio();
                t = AudioUtils.asObject(s).fullId
            }
            nav.go({ 0: "audios" + this.getOwnerId(), section: "recoms_audio", audio_id: t }, null, { nocur: !0 })
        }, AudioPage.prototype.onAudioUploaded = function(e, t) {
            if (t) {
                var i = getAudioPlayer(),
                    s = i.getPlaylist(AudioPlaylist.TYPE_PLAYLIST, this.getOwnerId(), AudioPlaylist.DEFAULT_PLAYLIST_ID);
                s.addAudio(t, 0);
                var a = i.getCurrentPlaylist();
                a && a.getSelf() == s && a.addAudio(t), "all" == this._currentSection && this._initAudioRowsAutoList();
                var o = AudioUtils.asObject(t);
                Object(_web_audio_player_stat_onAdditionalEvent__WEBPACK_IMPORTED_MODULE_10__.onAdditionalEvent)(null, o, { type: _shared_audio_AudioStats__WEBPACK_IMPORTED_MODULE_9__.TYPE_ADDED, subtype: _shared_audio_AudioStats__WEBPACK_IMPORTED_MODULE_9__.SUBTYPE_UPLOAD, context: "on_audio_uploaded", playlistId: s.getOwnerId() + "_" + s.getPlaylistId() });
                var l = 5,
                    r = this;
                ! function e(i) {
                    --l < 0 || setTimeout(function() {
                        ajax.post("al_audio.php", { act: "check_audio_data", audio_owner_id: o.ownerId, audio_id: o.id }, {
                            onDone: function(s) {
                                if (s) {
                                    var a = s[AudioUtils.AUDIO_ITEM_INDEX_TITLE] != t[AudioUtils.AUDIO_ITEM_INDEX_TITLE];
                                    (a = (a = a || s[AudioUtils.AUDIO_ITEM_INDEX_PERFORMER] != t[AudioUtils.AUDIO_ITEM_INDEX_PERFORMER]) || s[AudioUtils.AUDIO_ITEM_INDEX_FLAGS] != t[AudioUtils.AUDIO_ITEM_INDEX_FLAGS]) && (getAudioPlayer().updateAudio(o.fullId, s), "all" == r._currentSection && "audio" == cur.module && r._initAudioRowsAutoList(), o = s), e(1.5 * i)
                                }
                            },
                            onFail: () => !0
                        })
                    }, i)
                }(1e3)
            }
        }, AudioPage.prototype.uploadAudio = function(e) { this._data.uploadBanned ? showFastBox({ title: getLang("global_error") }, this._data.uploadBannedText) : showBox("al_audio.php", extend(e || {}, { act: "new_audio", gid: this.getOwnerId() < 0 ? -this.getOwnerId() : 0 }), { params: { width: "450px", bodyStyle: "padding: 0px; position: relative;" }, dark: 1 }) }, AudioPage.prototype.editAudio = function(e, t, i) { return showBox("al_audio.php", { act: "edit_audio_box", aid: t }, { params: { width: "456px", bodyStyle: "padding: 20px; background-color: #F7F7F7;", hideButtons: 1 }, dark: 1 }), i && cancelEvent(i), !1 }, AudioPage.prototype.restoreRecommendation = function(e) {
            var t = AudioUtils.getAudioFromEl(e, !0),
                i = { act: "restore_recommendation", hash: AudioUtils.getAudioExtra(t).recom.hash, audio_id: t.fullId };
            nav.objLoc.audio_id && (i.recommendation_type = "query"), nav.objLoc.album_id && (i.recommendation_type = "album"), ajax.post("al_audio.php", i, { onFail: () => !0 }), removeClass(e, "audio_row__deleted");
            var s = AudioUtils.getAddRestoreInfo(),
                a = s[t.fullId].removedCurrentPos,
                o = getAudioPlayer().getCurrentPlaylist();
            a >= 0 && o && o.getType() == AudioPlaylist.TYPE_RECOM && o.addAudio(AudioUtils.getAudioFromEl(e), a), delete s[t.fullId], AudioUtils.onRowOver(e, !1, !0)
        }, AudioPage.isInRecentPlayed = function(e) { var t = gpeByClass("_audio_playlist", e); return !(!t || !hasClass(t, "audio_recent_rows")) && data(t, "playlist") }, AudioPage.prototype.chooseFromMyAudios = function(e) {
            var t = this;
            AudioPage.editPlaylist(vk.id, AudioPlaylist.DEFAULT_PLAYLIST_ID, "attach", {
                audioPickerButtonText: getLang("global_add"),
                playlistPickerButtonText: getLang("global_add"),
                onAudioChoose: function(i, s, a) {
                    var o = i.ctrlKey;
                    if (ajax.post("al_audio.php", { act: "add", group_id: e, audio_owner_id: a.ownerId, audio_id: a.id, hash: a.addHash }, {
                            onDone: function(i) {
                                var s = e ? -e : vk.id;
                                i && (getAudioPlayer().getPlaylist(AudioPlaylist.TYPE_PLAYLIST, s, AudioPlaylist.DEFAULT_PLAYLIST_ID).addAudio(i, 0), t._initAudioRowsAutoList())
                            },
                            onFail: () => !0
                        }), o) s.innerHTML = getLang("audio_choose_added"), addClass(s, "ape_added");
                    else if (__bq)
                        for (; __bq.count();) __bq.hideLast()
                }
            })
        }, AudioPage.prototype.toggleAudioDurationType = function() { this.ap.toggleDurationType() }, AudioPage.prototype.updateShuffleButton = function() {
            var e = getAudioPlayer().getCurrentPlaylist() || this._pagePlaylist;
            if (e) {
                var t = e.isShuffled() && !e.isInitedSortedList();
                toggleClass(geByClass1("_audio_page_player_shuffle", this._els.pageContainer), "audio_page_player_btn_enabled", t), this.isLayer() && cur.audioPage && cur.audioPage.updateShuffleButton()
            }
        }, AudioPage.prototype.togglePodcast = function(e, t) {
            if (toggleClass(this._els.player, "audio_player_podcast", e), this._updatePlaybackRate(), !this.isPodcastPage()) {
                toggle(geByClass1("_audio_section_tab__current", this._els.pageContainer), !e);
                var i = geByClass1("_audio_section_tab__podcast", this._els.pageContainer);
                toggle(i, e), i && e && (t = t || getAudioPlayer().getCurrentAudio(), attr(geByClass1("ui_tab", i), "href", "podcasts" + t[AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID]))
            }
        }, AudioPage.prototype.updateFaveButton = function() {
            var e = getAudioPlayer().getCurrentFaveStatus(),
                t = geByClass1("audio_page_player_fave", this._els.player);
            t && toggleClass(t, "activated", e)
        }, AudioPage.prototype.toggleRepeat = function() {
            if (!this.isPodcastPage()) {
                var e = getAudioPlayer();
                e.isRepeatAll() || e.isRepeatCurrentAudio() ? e.toggleRepeatCurrentAudio() : e.toggleRepeatAll(), this.updateRepeatButton()
            }
        }, AudioPage.prototype.updateRepeatButton = function() {
            var e = geByClass("_audio_page_player_repeat");
            if (e && e.length) {
                var t = getAudioPlayer(),
                    i = t.isRepeatAll(),
                    s = t.isRepeatCurrentAudio();
                each(e, (e, t) => { toggleClass(t, "audio_page_player_btn_enabled", i), toggleClass(t, "audio_page_player_btn_repeat_one", s) })
            }
        }, AudioPage.prototype.toggleShuffle = function(e) {
            if (!this.isPodcastPage()) {
                toggleClass(e, "audio_page_player_btn_enabled") && statlogsValueEvent("audio_sort_stat", "audio_sort", "shuffle_player", this.isLayer() ? "layer" : "page");
                var t = getAudioPlayer().getCurrentPlaylist() || this._pagePlaylist;
                t.loadAll(function() {
                    t.isShuffled() && t.isInitedSortedList() ? (t.shuffle(0), t.shuffle(irand(1, 999999))) : t.isShuffled() ? t.shuffle(0) : t.shuffle(irand(1, 999999)), "current" == this._currentSection && this._initAudioRowsAutoList(!0);
                    var e = getAudioPlayer().getCurrentAudio() || t.getAudioAt(0);
                    getAudioPlayer().play(e, t), this.updateShuffleButton()
                }.bind(this))
            }
        }, AudioPage.prototype.toggleFave = function(e) {
            var t = getAudioPlayer().getCurrentAudio() || this._readyAudio;
            AudioUtils.isPodcast(t) && AudioPlayer.podcastToggleFave(e, t)
        }, AudioPage.prototype.changePlaybackRate = function(e, t) {
            var i = getAudioPlayer().getCurrentAudio() || this._readyAudio;
            AudioUtils.isPodcast(i) && (getAudioPlayer().podcastChangePlaybackRate(!!t.shiftKey), this._updatePlaybackRate())
        }, AudioPage.prototype._updatePlaybackRate = function() {
            var e = geByClass1("audio_page_player_play_rate", this._els.player);
            e && val(geByClass1("btn_icon", e), AudioPlayer.podcastGetPlaybackRate() + "x")
        }, AudioPage.prototype._getCurrentSearchParams = function() {
            var e = window.radioBtns["audio_search_type_" + intval(this.isLayer())],
                t = intval(this._searchSortFilter.selectedItems()[0][0]);
            return { performer: e && e.val ? 1 : null, lyrics: hasClass(geByClass1("_audio_fltr_with_lyrics", this._container), "on") ? 1 : null, sort: t ? 1 : null }
        }, AudioPage.searchAudios = function(e, t, i) { currentAudioPage(this).searchAudios(e, t, i) }, AudioPage.prototype.searchAudios = function(e, t, i) { this.lastQuery !== e && (this.lastQuery = e, this._muteSearch ? delete this._muteSearch : (e = trim(e), nav.change(extend(this._getCurrentSearchParams(), { q: e || null }), !1, { fromSearch: !0, globalQuery: e, fromHistory: i, isLayer: this.isLayer() }))) }, AudioPage.prototype.onUserAction = function(e, t) {
            var i = t.indexOfAudio(e);
            if (-1 != i && t.getType() == AudioPlaylist.TYPE_SEARCH && (!(t.getOwnerId() == vk.id && i >= 0 && i < t.getLocalFoundCount()) && t.getSearchParams())) {
                var s = t.getSearchParams();
                s.globalQuery && uiSearch.saveHistorySearch(this.searchInputEl, s.globalQuery, e.ownerId, e.id, t.getTotalCount(), t.getTotalCountHash())
            }
        }, AudioPage.prototype._updateFriendsList = function(e, t, i) {
            if (e = trim(e), this._friendSearchInProgress = !1, e) {
                var s = geByClass1("_audio_friends_list", this._els.pageContainer),
                    a = se('<div class="audio_friends_list _audio_friends_list" style="">' + e + "</div>");
                i && (this._shownFriends = []), domPN(s).appendChild(a), re(s)
            }
        }, AudioPage.searchMoreFriends = function(e) { this._searchMoreFriends(e) }, AudioPage.prototype._searchMoreFriends = function(e) { this._friendSearchInProgress || (this._friendSearchInProgress = !0, ajax.post("al_audio.php", { act: "search_friends", str: e }, { onDone: this._updateFriendsList.bind(this), onFail: () => !0 })) }, AudioPage.prototype.showMoreFriends = function(e, t) { this._friendSearchInProgress || (this._friendSearchInProgress = !0, this._shownFriends = this._shownFriends || [], each(geByClass("_audio_friend", this._els.pageContainer), function(e, t) { this._shownFriends.push(domData(t, "id")) }.bind(this)), ajax.post("al_audio.php", { act: "more_friends", exclude: !t && this._shownFriends.join(","), owner: t }, { showProgress: !!e && lockButton.pbind(e), hideProgress: !!e && unlockButton.pbind(e), onDone: this._updateFriendsList.bind(this), onFail: () => !0 }), statlogsValueEvent("audio_friends_block", "show_more")) }, AudioPage.prototype.shareAudio = function() {
            var e = e || getAudioPlayer().getCurrentAudio() || this._readyAudio;
            AudioUtils.shareAudio(!1, e)
        }, AudioPage.prototype.showStatusTooltip = function(e) { this.statusTT || (this.statusTT = !0, ajax.post("al_audio.php", { act: "status_tt" }, { onDone: (t, i) => { this.statusTT = new ElementTooltip(e, { content: i, width: 250, offset: [1, 14], elClassWhenShown: "audio_status_tt_shown", id: "audio_status_tt", onFirstTimeShow: function(e) { this.sb = new uiScroll(geByClass1("audio_status_wrap", e), { global: !0 }) }, onShow: function() { setTimeout(function() { this.statusTT.sb.update() }.bind(this), 0) }.bind(this) }), cur._onStatusExportBtn && (this.statusTT.show(), this.statusTT.sb.update()) }, onFail: () => !0 })) }, AudioPage.prototype.isLayer = function() { return this._data.isLayer }, AudioPage.prototype.isPodcastPage = function() { return !this.isLayer() && !!this._data.podcastPage }, AudioPage.prototype.destroy = function() { this._trackSlider && this._trackSlider.destroy(), this._volumeSlider && this._volumeSlider.destroy(), removeEvent(window, "scroll", this._ev_onScroll) }, AudioPage.prototype.getPageCurrentPlaylist = function() { return this._pagePlaylist }, AudioPage.prototype.clearCurrentPlaylist = function() {
            if (this.isLayer()) {
                var e = getAudioPlayer();
                e.deleteCurrentPlaylist();
                var t = geByClass1("_audio_section_tab__current", this._els.pageContainer);
                addClass(t, "unshown"), uiTabs.switchTab(domFC(geByClass1("_audio_section_tab__all", this._els.pageContainer)), { noAnim: !0 }), this.updateCurrentPlayingInfo(), this.togglePodcast(!1), this.showSection("all"), this.updateLayerHeight();
                var i = e.getPlaylist(AudioPlaylist.TYPE_PLAYLIST, vk.id, AudioPlaylist.DEFAULT_PLAYLIST_ID).getAudiosList()[0];
                i && (this._readyAudio = i, this._initPlayer(!0), this.isLayer() && cur.audioPage && (cur.audioPage._readyAudio = i, cur.audioPage._initPlayer(!0)))
            }
        }, AudioPage.prototype.setTooltipTitle = function(e) {
            if (!e.titleSet) {
                var t = geByClass1("audio_page_player_title_performer", e),
                    i = geByClass1("audio_page_player_title_song", e);
                (t.scrollWidth > t.clientWidth || i.scrollWidth > i.clientWidth) && e.setAttribute("title", e.innerText), e.titleSet = !0
            }
        }, AudioPage.prototype._initPlayer = function(e) {
            var t = this,
                i = getAudioPlayer(),
                s = this._els.pageContainer,
                a = geByClass1("_audio_page_player", s),
                o = geByClass1("audio_page_player_title", a),
                l = geByClass1("audio_page_player_title_performer", a),
                r = geByClass1("audio_page_player_title_song", a),
                d = geByClass1("audio_page_player_title_song_title", a),
                n = geByClass1("audio_page_player_title_song_subtitle", a),
                _ = geByClass1("audio_page_player_duration", a),
                u = geByClass1("_audio_page_player__cover", a),
                c = geByClass1("_audio_page_player_play", a),
                h = geByClass1("_play_blind_label", c),
                p = (geByClass1("_audio_page_player_repeat", a), geByClass1("_audio_page_player_add", a)),
                g = void 0;

            function y(e) {
                if (i.ads.isPlaying()) l.innerHTML = getLang("global_audio_ad"), setStyle(r, "display", "none"), toggleClass(a, "audio_song_is_explicit", !1);
                else {
                    var s = AudioUtils.getAudioPerformers(e);
                    e = AudioUtils.asObject(e), setStyle(r, "display", "block"), l.innerHTML = geByClass1("audio_page_player2") ? s : e.performer, AudioUtils.isPodcast(e) ? d.innerHTML = `<a href="/podcast${e.fullId}" onclick="return showPodcast(this, '${e.fullId}', event, 'player');" class="audio_player_podcast_title">${e.title}</a>` : d.innerHTML = e.title, n.innerHTML = e.subTitle ? e.subTitle : "", e.coverUrl_p ? (setStyle(u, "background-image", "url(" + e.coverUrl_p + ")"), setStyle(u, "background-size", "cover")) : (setStyle(u, "background-image", null), setStyle(u, "background-size", "")), toggleClass(a, "audio_title_long_performer", e.isLongPerformer), toggleClass(a, "audio_song_is_explicit", e.isExplicit), !t.isLayer() && i.getCurrentAudio() && AudioUtils.asObject(i.getCurrentAudio()).fullId == e.fullId && (setDocumentTitle(replaceEntities(stripHTML(e.performer + " - " + e.title))), clearTimeout(window.pageSetTitleTimer)), r && setStyle(r, "display", "none"), l && setStyle(l, "display", "none"), requestAnimationFrame(() => {
                        var e = i.ads.isPlaying() ? "none" : "block";
                        r && setStyle(r, "display", e), l && setStyle(l, "display", "block")
                    })
                }
            }

            function P(e, t) { return t = intval(t), AudioPlayer.getDurationType() && 1 != e ? "-" + formatTime(Math.round(t - e * t)) : formatTime(Math.round(e * t)) }

            function A() {
                if (t._trackSlider) {
                    var e = AudioUtils.asObject(i.getCurrentAudio() || t._readyAudio);
                    if (e) {
                        var s = !1;
                        s = t.getOwnerId() < 0 && t.canAddToGroup() ? e.ownerId != t.getOwnerId() : e.ownerId != vk.id, g !== s && (toggle(p, s), g = s), cur._audioAddRestoreInfo = cur._audioAddRestoreInfo || {};
                        var a = cur._audioAddRestoreInfo[e.fullId];
                        addClass(p, "no_transition"), toggleClass(p, "audio_player_btn_added", !(!a || "added" != a.state)), removeClassDelayed(p, "no_transition"), t.updateRepeatButton()
                    }
                }
            }
            if (!this._trackSlider) {
                var f = i.ads.isPlaying() ? i.ads.getCurrentProgress() : i.getCurrentProgress(),
                    v = i.ads.isPlaying() ? 0 : i.getCurrentBuffered(),
                    w = geByClass1("audio_page_player_track_slider", a),
                    m = geByClass1("audio_page_player_volume_slider", a);
                w && (this._trackSlider = new Slider(w, {
                    value: f,
                    backValue: v,
                    size: 1,
                    hintClass: "audio_player_hint",
                    withBackLine: !0,
                    formatHint: e => { var t = i.getCurrentAudio() || this._readyAudio; return t = AudioUtils.asObject(t), formatTime(Math.round(e * (t ? t.duration : 0))) },
                    onEndDragging: e => {
                        var t = i.getCurrentAudio() || this._readyAudio;
                        (t = AudioUtils.asObject(t)) && AudioUtils.isPodcast(t) && i.podcastSetActionRef(t, AudioUtils.PodcastsLogs.ACTION_SEEK, "", a), i.seek(e)
                    }
                }), i.ads.isPlaying() && (this._trackSlider.toggleAdState(!0), this.toggleRemoveAdsLink(!0))), m && (this._volumeSlider = new Slider(m, { value: i.getVolume(), size: 1, hintClass: "audio_player_hint", log: !0, formatHint: e => Math.round(100 * e) + "%", onChange: e => { i.setVolume(e) } })), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.AD_DEINITED, () => {}), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.AD_READY, () => {}), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.AD_STARTED, () => { this.toggleRemoveAdsLink(!0), this._trackSlider && (this._trackSlider.toggleAdState(!0), this._trackSlider.setBackValue(0)) }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.AD_COMPLETED, () => { this.toggleRemoveAdsLink(!1), this._trackSlider && this._trackSlider.toggleAdState(!1) }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.START_LOADING, () => { this._trackSlider && this._trackSlider.toggleLoading(!0) }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.CAN_PLAY, () => { this._trackSlider && this._trackSlider.toggleLoading(!1) }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.ADDED, (e, t) => {
                    (e = AudioUtils.asObject(e)) && e.fullId == t && addClass(p, "audio_player_btn_added")
                }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.REMOVED, (e, t) => {
                    (e = AudioUtils.asObject(e)) && e.fullId == t && removeClass(p, "audio_player_btn_added")
                }), i.on(this, [_shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.PLAY, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.PLAY_REQUESTED], (e, t, s) => { delete this._readyAudio, data(a, "audio", e), A(), y(e), addClass(c, "audio_playing"), t && !cur.audioStartReadyAudio && (this._trackSlider && this._trackSlider.setBackValue(0), i.ads.isPlaying() || (_.innerHTML = P(0, AudioUtils.asObject(e).duration)), o.setAttribute("title", ""), o.titleSet = !1), h.innerHTML = getLang("global_audio_pause"), this.updateCurrentPlayingInfo(), this.updateShuffleButton(), this.updateFaveButton() }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.PAUSE, () => { removeClass(c, "audio_playing"), h.innerHTML = getLang("global_audio_play") }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.STOP, () => { removeClass(c, "audio_playing"), h.innerHTML = getLang("global_audio_play") }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.BUFFERED, (e, t) => { this._trackSlider && this._trackSlider.setBackValue(t) }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.VOLUME, (e, t) => { this._volumeSlider && this._volumeSlider.setValue(t) }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.ENDED, () => { this._trackSlider && this._trackSlider.toggleLoading(!1) }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.UPDATE, (e, t) => { e && y(e), i.ads.isPlaying() || e && t && (_.innerHTML = P(t, AudioUtils.asObject(e).duration)) }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.PROGRESS, (e, t, i) => { this._trackSlider && (this._trackSlider.toggleLoading(!1), this._trackSlider.setValue(t)), isUndefined(i) || isNaN(i) || (_.innerHTML = P(t, i)) }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.FAILED, () => { this._trackSlider && this._trackSlider.toggleLoading(!1) }), i.on(this, _shared_audio_AudioPlayerEvents__WEBPACK_IMPORTED_MODULE_8__.events.CURRENT_CHANGED, () => {
                    var e = i.getCurrentAudio() || this._readyAudio;
                    domData(this._els.player, "audio", JSON.stringify(e)), this.togglePodcast(AudioUtils.isPodcast(e), e), this._trackSlider.setValue(0)
                })
            }
            var C = i.getCurrentAudio() || this._readyAudio;
            C && (domData(a, "audio", JSON.stringify(C)), y(C), toggleClass(c, "audio_playing", i.isPlaying()), _.innerHTML = P(1, AudioUtils.asObject(C).duration), e && this._trackSlider && (this._trackSlider.setValue(0), this._trackSlider.setBackValue(0), this._trackSlider.toggleLoading(!1))), A();
            var b = i.getCurrentAudio() || this._readyAudio;
            this.togglePodcast(AudioUtils.isPodcast(b), b), this.isLayer() || this._initFixedPlayer()
        }, AudioPage.prototype._initFixedPlayer = function() {
            var e = getSize(this._els.playerWrap);
            setStyle(this._els.playerWrap, { width: e[0], height: e[1] });
            var t = getSize(this._els.player);
            setStyle(this._els.player, { width: t[0], height: t[1] });
            var i, s, a = getSize("page_header_wrap")[1],
                o = getXY(this._els.contentBlock)[1],
                l = getXY(this._els.playerWrap)[1] + getSize(this._els.playerWrap)[1] - a,
                r = !1,
                d = () => {
                    var e = scrollGetY(),
                        t = e > o;
                    if (e < l && (i || r)) return clearTimeout(i), clearTimeout(s), removeClass(this._els.player, "audio_page_player_fixed_shown"), removeClass(this._els.player, "audio_page_player_fixed"), void(r = i = !1);
                    t && !r && (clearTimeout(i), i = 0, addClass(this._els.player, "audio_page_player_fixed"), s = setTimeout(() => addClass(this._els.player, "audio_page_player_fixed_shown")), r = !0), !t && r && (clearTimeout(i), i = 0, removeClass(this._els.player, "audio_page_player_fixed_shown"), i = setTimeout(() => { removeClass(this._els.player, "audio_page_player_fixed"), i = !1 }, 250), r = !1)
                };
            addEvent(window, "scroll", d), cur.destroy.push(() => { d && removeEvent(window, "scroll", d) })
        }, AudioPage.prototype.togglePlayerPlay = function(e) {
            var t = getAudioPlayer();
            if (t.isPlaying()) {
                (o = t.getCurrentAudio()) && t.podcastSetActionRef(o, AudioUtils.PodcastsLogs.ACTION_PAUSE, "", e), t.pause()
            } else {
                var i, s = this.getPageCurrentPlaylist(),
                    a = t.getCurrentPlaylist(),
                    o = t.getCurrentAudio(),
                    l = this._readyAudio ? this._readyAudio : o;
                if (l = l || s.getAudioAt(0), AudioUtils.isClaimedAudio(l)) { l = AudioUtils.asObject(l); var r = AudioUtils.getAudioExtra(l).claim; return void showAudioClaimWarning(l, r) }
                s && -1 != s.indexOfAudio(l) ? i = s : a && -1 != a.indexOfAudio(l) ? i = a : (i = new AudioPlaylist(AudioPlaylist.TYPE_TEMP, vk.id)).addAudio(l), delete this._readyAudio, cur.audioStartReadyAudio = !0, t.podcastSetActionRef(l, AudioUtils.PodcastsLogs.ACTION_PLAY, "", e), t.play(l, i)
            }
        }, AudioPage.prototype.promoAlbumSlideInit = function() {
            var e = geByClass1("audio_promo");
            if (!this.isLayer() && e) {
                var t = geByClass1("audio_promo__items", e);
                if (t && !(t.children.length <= 1)) {
                    this.promoAlbumSlideAutoStart(t);
                    var i = () => this.promoAlbumSlideAutoStop(),
                        s = () => this.promoAlbumSlideAutoStart(t);
                    addEvent(e, "mouseenter", i), addEvent(e, "mouseleave", s), window.cur && cur.destroy.push(() => { this.promoAlbumSlideAutoStop(), removeEvent(e, "mouseenter", i), removeEvent(e, "mouseleave", s) })
                }
            }
        }, AudioPage.prototype.promoAlbumSlideAutoStart = function(e) { window.cur && (cur._promoAlbumSlideTO = setTimeout(() => this.promoAlbumSlide(e, 1), SLIDER_TIMEOUT)) }, AudioPage.prototype.promoAlbumSlideAutoStop = function() { window.cur && clearTimeout(cur._promoAlbumSlideTO) }, AudioPage.prototype.promoAlbumSlide = function(e, t) {
            var i = vk.rtl ? t > 0 ? -1 : 1 : t < 0 ? -1 : 1,
                s = gpeByClass("audio_promo", e);
            if (s) {
                var a = geByClass1("audio_promo__items", s);
                if (a && !data(a, "sliding")) {
                    this.promoAlbumSlideAutoStop();
                    var o = a.scrollLeft,
                        l = a.offsetWidth,
                        r = a.children,
                        d = r.length,
                        n = e => vk.rtl ? a.scrollWidth - e * l - l : e * l;
                    if (r.length > 1) {
                        this.promoAlbumSlideAutoStart(e);
                        var _ = !1,
                            u = null,
                            c = !1,
                            h = Math.round(o / l);
                        (h += i) >= d || h < 0 ? (_ = r[0].cloneNode(!0), a.appendChild(_), h >= d ? (c = !0, u = n(h), h = 0) : h < 0 && (a.scrollLeft = n(d), u = n(h = d - 1))) : u = n(h), data(a, "sliding", !0), animate(a, { scrollLeft: u }, { duration: 500, transition: Fx.Transitions.swiftOut, onComplete: () => { c && (a.scrollLeft = n(0)), _ && re(_), data(a, "sliding", !1) } })
                    }
                }
            }
        }, AudioPage.prototype.promoAlbumClose = function(e, t) {
            var i = gpeByClass("audio_promo__block", e),
                s = gpeByClass("audio_promo__items", i),
                a = gpeByClass("audio_promo", i);
            re(i);
            var o = s.children.length;
            if (o <= 1) {
                var l = geByClass1("audio_promo__left", a),
                    r = geByClass1("audio_promo__right", a);
                addClass(l, "hidden"), addClass(r, "hidden")
            }
            o || addClass(a, "hidden"), ajax.post("al_audio.php", { act: "hide_promo", promo_name: t }, { onFail: () => !0 })
        }, AudioPage.prototype.toggleRemoveAdsLink = function(e) { toggleClass(this._els.player, "audio_page_player_show_remove_ads", !!e) }, AudioPage.prototype.showPromoBox = function() { this.isPodcastPage() || ajax.post("al_audio.php?act=need_show_promo", {}, { onDone: function(e) { e && showWiki({ w: "promo_box" }) } }) }, window.AudioPage || (window.AudioPage = AudioPage, window.currentAudioPage = currentAudioPage), window.PlayList || (window.PlayList = _web_audio_playlist__WEBPACK_IMPORTED_MODULE_12__.default);
        try { stManager.done("audio.js") } catch (e) {}
    },
    "v+/n": function(e, t, i) {
        "use strict";

        function s(e) { return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).querySelector(e) }

        function a(e) { return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).querySelectorAll(e) }
        i.r(t), window.$ = s, window.$$ = a,
            function() { HTMLElement.prototype.$ = HTMLElement.prototype.querySelector, HTMLElement.prototype.$$ = HTMLElement.prototype.querySelectorAll; try { SVGElement.prototype.$ = SVGElement.prototype.querySelector, SVGElement.prototype.$$ = SVGElement.prototype.querySelectorAll } catch (e) {} }();
        var o = i("rEJs");
        i.d(t, "default", function() { return l });
        class l {
            constructor(e, t) {
                this.playlistElement = s(`#playlist-${e}`), this.playlist = t, this.playlistList = s(`.${l.playListClass}__list`, this.playlistElement), this.playlistListAll = s(`.${l.actionButtonsClass}--all`, this.playlistList), this.audio = {}, this.audioElements = a(`.${l.playListClass}__audioRow`, this.playlistList);
                for (var i = 0; i < this.audioElements.length; i++) this.audio[this.audioElements[i].dataset.fullId] = this.audioElements[i];
                this.body = s(`.${l.playListClass}__body`, this.playlistElement), this.shuffle = s(`.${l.actionButtonsClass}--shuffle`, this.body), this.actions = s(`.${l.playListClass}__actions`, this.playlistElement), this.actions && (this.add = s(`.${l.actionButtonsClass}--add`, this.actions), this.addText = s(`.${l.actionButtonsClass}--add__text`, this.add), this.share = s(`.${l.actionButtonsClass}--share`, this.actions), this.more = s(`.${l.actionButtonsClass}--more`, this.actions), this.add.addEventListener("click", this.addPlayList.bind(this)), this.share.addEventListener("click", this.sharePlayList.bind(this)), this.more.addEventListener("mouseover", this.onMouseOver.bind(this, this.more, `${l.actionButtonsClass}_more`)), this.more.addEventListener("mouseleave", this.onMouseLeave.bind(this, this.more, `${l.actionButtonsClass}_more`))), this.menu = s(`.${l.menuButtonsClass}__inner`, this.playlistElement), this.menu && (this.playNext = s(`.${l.menuButtonsClass}__item--playNext`, this.menu), this.editPlaylist = s(`.${l.menuButtonsClass}__item--editPlaylist`, this.menu), this.deletePlaylist = s(`.${l.menuButtonsClass}__item--deletePlaylist`, this.menu), this.addToGroup = s(`.${l.menuButtonsClass}__item--addToGroup`, this.menu), this.removeFromGroup = s(`.${l.menuButtonsClass}__item--removeFromGroup`, this.menu), this.copyLink = s(`.${l.menuButtonsClass}__item--copyLink`, this.menu)), this.play = s(`.${l.playListClass}__play`, this.playlistElement), this.play && (this.player = getAudioPlayer(), this.player.addPlaylist(new window.AudioPlaylist({ ownerId: this.playlist.owner_id, albumId: this.playlist.id, type: this.playlist.type, list: this.playlist.list }, this.playlist.owner_id, this.playlist.id)), this.player.on(this.playlist.context, o.events.PLAY, this.onPlay.bind(this)), this.player.on(this.playlist.context, o.events.PAUSE, this.onStop.bind(this)), this.player.on(this.playlist.context, o.events.STOP, this.onStop.bind(this)), this.play.addEventListener("click", this.playSong.bind(this)), this.playlistList.addEventListener("click", this.playFromList.bind(this))), this.playlistListAll && this.playlistListAll.addEventListener("click", this.showAllAudio.bind(this)), this.shuffle && this.shuffle.addEventListener("click", this.shufflePlayList.bind(this)), this.playNext && this.playNext.addEventListener("click", this.playNextSong.bind(this)), this.editPlaylist && this.editPlaylist.addEventListener("click", this.handleEditPlaylist.bind(this)), this.deletePlaylist && this.deletePlaylist.addEventListener("click", this.handleDeletePlaylist.bind(this)), this.addToGroup && this.addToGroup.addEventListener("click", this.handleAddToGroup.bind(this)), this.removeFromGroup && this.removeFromGroup.addEventListener("click", this.handleRemoveFromGroup.bind(this)), this.copyLink && this.copyLink.addEventListener("click", this.copyPlayListLink.bind(this))
            }
            showAllAudio() { this.playlistList.classList.add(`${l.playListClass}__list--all`) }
            shufflePlayList() { this.showAllAudio(), this.player.playPlaylist(this.playlist.owner_id, this.playlist.id, this.playlist.access_hash, this.playlist.context, !0) }
            addPlayList() { AudioUtils.followPlaylist(this.addText, this.playlist.owner_id, this.playlist.id, this.playlist.follow_hash), this.add.classList.toggle(`${l.actionButtonsClass}--add--added`), this.add.classList.contains(`${l.actionButtonsClass}--add--added`) ? this.addText.innerText = this.addText.dataset.textFollowed : this.addText.innerText = this.addText.dataset.textFollow }
            sharePlayList(e) { window.shareAudioPlaylist(e, this.playlist.owner_id, this.playlist.id, this.playlist.access_hash) }
            playNextSong() { this.player.playNextPlaylist(this.playlist.owner_id, this.playlist.id, this.playlist.access_hash, this.playlist.context) }
            copyPlayListLink() { AudioUtils.copyPlaylistLink(this.playlist.owner_id, this.playlist.id, this.playlist.access_hash) }
            playSong() { this.isCurrentPlaylist() ? !0 === this.isPlaying ? this.player.pause() : this.player.play() : this.player.playPlaylist(this.playlist.owner_id, this.playlist.id, this.playlist.access_hash, this.playlist.context) }
            playFromList(e) {
                var t, i = e.target;
                if (-1 !== i.className.indexOf("AudioRow")) {
                    for (; i && !i.classList.contains(`${l.playListClass}__audioRow`);) i = i.parentNode;
                    t = i.dataset.id
                }
                if (t) {
                    var s = this.player.getPlaylist(this.playlist.type, this.playlist.owner_id, this.playlist.id, this.playlist.access_hash);
                    this.player.play(t, s, this.playlist.context)
                }
            }
            onPlay() { this.isCurrentPlaylist() && (this.isPlaying = !0, this.play.classList.add(`${l.playListClass}__stop`), this.play.classList.remove(`${l.playListClass}__play`)) }
            onStop() { this.isCurrentPlaylist() && (this.isPlaying = !1, this.play.classList.add(`${l.playListClass}__play`), this.play.classList.remove(`${l.playListClass}__stop`)) }
            onMouseOver(e, t) { e.classList.add(`${t}--hover`) }
            onMouseLeave(e, t) { e.classList.remove(`${t}--hover`) }
            isCurrentPlaylist() { var e = this.player.getCurrentAudio(); return Boolean(e) && this.playlist.list.some(t => t[0] === e[0] && t[1] === e[1]) }
            handleEditPlaylist() { window.AudioUtils && window.AudioUtils.editPlaylist(this.playlist.owner_id, this.playlist.id, "edit") }
            handleDeletePlaylist() { window.AudioPage && window.AudioPage.deletePlaylist(this.playlist.owner_id, this.playlist.id, this.playlist.edit_hash) }
            handleAddToGroup() { window.AudioUtils && window.AudioUtils.addToGroupBox(this.playlist.owner_id, this.playlist.id, this.playlist.access_hash) }
            handleRemoveFromGroup() { window.AudioUtils && window.AudioUtils.removeFromGroup(this.playlist.owner_id, this.playlist.id, this.playlist.follow_hash) }
        }
        l.playListClass = "AudioPlaylistSnippet", l.actionButtonsClass = "ActionButton", l.menuButtonsClass = "ActionsMenu"
    }
});