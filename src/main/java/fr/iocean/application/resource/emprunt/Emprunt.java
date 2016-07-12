package fr.iocean.application.resource.emprunt;

import java.util.Date;

import fr.iocean.application.resource.adherent.Adherent;
import fr.iocean.application.resource.media.Media;

public class Emprunt {
	private Adherent adherent;
	private Media media;
	private Date dateEmprunt;
	
	public Adherent getAdherent() {
		return adherent;
	}
	public void setAdherent(Adherent adherent) {
		this.adherent = adherent;
	}
	public Media getMedia() {
		return media;
	}
	public void setMedia(Media media) {
		this.media = media;
	}
	public Date getDateEmprunt() {
		return dateEmprunt;
	}
	public void setDateEmprunt(Date dateEmprunt) {
		this.dateEmprunt = dateEmprunt;
	}
	
}
