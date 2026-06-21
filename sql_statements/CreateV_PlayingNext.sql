DROP VIEW IF EXISTS v_NextPlaying;
CREATE VIEW v_NextPlaying
(
Song,
Orquestra,
Artist, 
Genre,
Year
)
 
AS 
select  title , artist , album_artist, genre, year  from library where id=
(select track_id from PlaylistTracks where position = 1 and playlist_id = 1);